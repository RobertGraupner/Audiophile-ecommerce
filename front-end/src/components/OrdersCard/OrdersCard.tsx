import { Order } from '../../types/order';
import { OrdersCardHeader } from '../OrdersCardHeader/OrdersCardHeader';
import { OrdersCardItems } from '../OrdersCardItem/OrdersCardItems';
import { OrdersCardFooter } from '../OrdersCardFooter/OrdersCardFooter';

interface OrdersCardProps {
  order: Order;
}

export function OrdersCard({ order }: OrdersCardProps) {
  return (
    <div className="w-full rounded-lg bg-white p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
      <OrdersCardHeader order={order} />
      <OrdersCardItems items={order.items} />
      <OrdersCardFooter order={order} />
    </div>
  );
}
