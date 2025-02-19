import { CheckoutForm } from '../../components/CheckoutForm/CheckoutForm';
import { CheckoutSummary } from '../../components/CheckoutSummary/CheckoutSummary';
import { ConfirmationModal } from '../../components/ConfirmationModal/ConfirmationModal';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CustomFormData } from '../../types/customFormData';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { createOrder } from '../../api/ordersApi';
import { calculateTotal } from '../../utils/calculateTotalPrice';
import { SHIPPING_COST, VAT_RATE } from '../../constants/prices';
import { AuthModal } from '../../components/AuthModal/AuthModal';

export function CheckoutPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState<{
    items: typeof cartItems;
    total: number;
  } | null>(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CustomFormData>({
    defaultValues: {
      paymentMethod: 'Cash on Delivery',
    },
  });

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/');
    }
  }, [cartItems, navigate]);

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
          total: total,
        });
        clearCart();
        setIsModalOpen(true);
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error('Failed to create order:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-light-grey px-8 pb-40 lg:px-10">
      <div className="mx-auto max-w-[1120px] py-8 md:py-20">
        <Link
          to={`/`}
          className="text-[15px] leading-[25px] opacity-50 hover:text-primary hover:opacity-100"
        >
          Go Back
        </Link>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div className="mx-auto mt-14 grid max-w-[1120px] gap-8 md:grid-cols-[2fr_1fr]">
            <CheckoutForm register={register} errors={errors} watch={watch} />
            <CheckoutSummary isSubmitting={isSubmitting} />
          </div>
        </form>
      </div>
      {isAuthModalOpen && (
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          defaultIsLogin={true}
          message="Please log in to complete your order"
        />
      )}
      {isModalOpen && orderDetails && (
        <ConfirmationModal
          onClose={() => {
            setIsModalOpen(false);
            navigate('/orders');
          }}
          orderItems={orderDetails.items}
          grandTotal={orderDetails.total}
        />
      )}
    </main>
  );
}
