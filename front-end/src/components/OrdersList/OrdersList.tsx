import { Link } from 'react-router-dom';
import { Order } from '../../types/order';
import { OrdersCard } from '../OrdersCard/OrdersCard';

interface OrdersListProps {
  orders: Order[];
}

export function OrdersList({ orders }: OrdersListProps) {
  if (orders.length === 0) {
    return (
      <div className="rounded-lg bg-white p-6 text-center shadow-lg">
        <p className="text-lg font-bold text-gray-900">No orders</p>
        <p className="mt-2 text-sm text-gray-500">
          You haven't placed any orders yet.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {orders.map((order) => (
        <Link
          to={`/orders/${order.id}`}
          state={{ orderDetails: order }}
          key={order.id}
          className="block w-full"
        >
          <OrdersCard order={order} />
        </Link>
      ))}
    </div>
  );
}
