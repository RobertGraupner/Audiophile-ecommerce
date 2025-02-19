import { Order } from '../../types/order';

interface OrdersCardHeaderProps {
  order: Order;
}

export function OrdersCardHeader({ order }: OrdersCardHeaderProps) {
  return (
    <div className="mb-4 border-b pb-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-900">
            Order <span className="font-bold">#{order.id}</span>
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
    </div>
  );
}
