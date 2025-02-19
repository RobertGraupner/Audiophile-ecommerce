import { Order } from '../../types/order';
import { OrdersCardHeader } from '../OrdersCardHeader/OrdersCardHeader';
import { OrdersCardItems } from '../OrdersCardItem/OrdersCardItems';
import { OrdersCardFooter } from '../OrdersCardFooter/OrdersCardFooter';
import { Link } from 'react-router-dom';

interface OrdersCardProps {
  order: Order;
}

export function OrdersCard({ order }: OrdersCardProps) {
  return (
    <div className="w-full rounded-lg bg-white p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
      <Link to={`/orders/${order.id}`} className="block cursor-pointer">
        <div className="mb-4">
          <OrdersCardHeader order={order} />
          <OrdersCardItems items={order.items} />
        </div>
        <OrdersCardFooter order={order} />
      </Link>
    </div>
  );
}
