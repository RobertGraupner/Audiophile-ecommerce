import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useCart } from './useCart';
import { createOrder } from '../api/ordersApi';
import { calculateTotal } from '../utils/calculateTotalPrice';
import { SHIPPING_COST, VAT_RATE } from '../constants/prices';
import { CustomFormData } from '../types/customFormData';
import { CartItem } from '../types/cartItem';

interface OrderDetails {
  items: CartItem[];
  total: number;
}

export function useCheckout() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  const { user } = useAuth();
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const onSubmit = async (data: CustomFormData) => {
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }

    setIsSubmitting(true);
    try {
      const subtotal = calculateTotal(cartItems);
      const shipping = SHIPPING_COST;
      const vat = subtotal * VAT_RATE;
      const total = subtotal + shipping + vat;

      const result = await createOrder(user.id, cartItems, data);
      if (result.success) {
        setOrderDetails({
          items: [...cartItems],
          total,
        });
        setIsModalOpen(true);
        clearCart();
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error('Failed to create order:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModalAndNavigate = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  return {
    onSubmit,
    isSubmitting,
    isModalOpen,
    isAuthModalOpen,
    orderDetails,
    closeModalAndNavigate,
    setIsAuthModalOpen,
  };
}
