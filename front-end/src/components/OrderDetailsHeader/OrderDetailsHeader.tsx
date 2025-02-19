import { formatDate } from '../../utils/formatDate';
import { Order } from '../../types/order';

interface OrderDetailsHeaderProps {
  order: Order;
  itemCount: number;
}

export function OrderDetailsHeader({
  order,
  itemCount,
}: OrderDetailsHeaderProps) {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b pb-4">
      <div>
        <h1 className="text-md font-bold text-gray-900 sm:text-xl">
          Order #{order.id}
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          {formatDate(order.created_at)} • {itemCount}{' '}
          {itemCount === 1 ? 'item' : 'items'}
        </p>
      </div>
      <span className="rounded-full bg-primary px-4 py-1 text-xs font-medium text-white">
        {order.status === 'completed'
          ? 'Completed'
          : order.status === 'processing'
            ? 'In progress'
            : 'Pending'}
      </span>
    </div>
  );
}
