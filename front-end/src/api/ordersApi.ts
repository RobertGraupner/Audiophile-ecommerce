import { supabase } from '../lib/supabase';
import { CartItem } from '../types/cartItem';
import { SHIPPING_COST, VAT_RATE } from '../constants/prices';
import { calculateTotal } from '../utils/calculateTotalPrice';

interface OrderData {
  user_id: string;
  items: CartItem[];
  shipping_address: {
    name: string;
    email: string;
    phone: string;
    address: string;
    zip: string;
    city: string;
    country: string;
  };
  payment_method: string;
  subtotal: number;
  shipping: number;
  vat: number;
  total: number;
  status: 'pending' | 'processing' | 'completed';
}

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  paymentMethod: string;
}

export const createOrder = async (
  userId: string,
  cartItems: CartItem[],
  formData: FormData
): Promise<{ success: boolean; error?: string }> => {
  try {
    const subtotal = calculateTotal(cartItems);
    const shipping = SHIPPING_COST;
    const vat = Number((subtotal * VAT_RATE).toFixed(2));
    const total = subtotal + shipping + vat;

    const orderData: OrderData = {
      user_id: userId,
      items: cartItems,
      shipping_address: {
        name: formData.name,
        email: formData.email,
        phone: formData.phoneNumber,
        address: formData.address,
        zip: formData.zipCode,
        city: formData.city,
        country: formData.country,
      },
      payment_method: formData.paymentMethod,
      subtotal,
      shipping,
      vat,
      total,
      status: 'pending',
    };

    const { error } = await supabase.from('orders').insert([orderData]);

    if (error) throw error;

    return { success: true };
  } catch (error) {
    console.error('Error creating order:', error);
    return { success: false, error: 'Failed to create order' };
  }
};

export const fetchUserOrders = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

export const fetchOrderDetails = async (orderId: string) => {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('id', orderId)
      .single();

    if (error) throw error;

    return data;
  } catch (error) {
    console.error('Error fetching order details:', error);
    throw error;
  }
};
