import { LoaderFunctionArgs } from 'react-router-dom';
import { fetchOrderDetails, fetchUserOrders } from './ordersApi';
import { supabase } from '../lib/supabase';

export const ordersLoader = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session?.user) {
    return [];
  }
  return fetchUserOrders(session.user.id);
};

export const orderDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  const { orderId } = params;
  if (!orderId) {
    throw new Error('Order ID is required');
  }
  return fetchOrderDetails(orderId);
};
