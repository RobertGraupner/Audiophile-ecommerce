import { Link } from 'react-router-dom';
import { Order } from '../../types/order';
import { OrderDetailsHeader } from '../OrderDetailsHeader/OrderDetailsHeader';
import { OrderDetailsItems } from '../OrderDetailsItems/OrderDetailsItems';
import { OrderDetailsShipping } from '../OrderDetailsShipping/OrderDetailsShipping';
import { OrderDetailsSummary } from '../OrderDetailsSummary/OrderDetailsSummary';

interface OrderDetailsProps {
  order: Order;
}

export function OrderDetails({ order }: OrderDetailsProps) {
  const itemCount = order.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="mx-auto max-w-[1120px] py-8 md:py-20">
      <Link
        to="/orders"
        className="text-[15px] leading-[25px] opacity-50 hover:text-primary hover:opacity-100"
      >
        Go back
      </Link>
      <div className="mt-14 rounded-lg bg-white p-8">
        <OrderDetailsHeader order={order} itemCount={itemCount} />
        <div className="mt-8 grid gap-8 sm:grid-cols-[2fr_1fr]">
          <OrderDetailsItems items={order.items} />
          <OrderDetailsShipping address={order.shipping_address} />
        </div>

        <OrderDetailsSummary total={order.total} vat={order.vat} />
      </div>
    </div>
  );
}
