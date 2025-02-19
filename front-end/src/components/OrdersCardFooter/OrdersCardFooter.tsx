import { Order } from '../../types/order';
import { formatPrice } from '../../utils/formatPrice';
import { Link } from 'react-router-dom';

interface OrdersCardFooterProps {
  order: Order;
}

export function OrdersCardFooter({ order }: OrdersCardFooterProps) {
  const itemCount = order.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="mt-4 border-t pt-3">
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Items:</span>
          <span className="text-sm font-medium text-gray-900">{itemCount}</span>
        </div>
        {order.payment_method && (
          <div className="mt-2 flex justify-between">
            <span className="text-sm text-gray-500">Payment:</span>
            <span className="text-sm font-medium text-gray-900">
              {order.payment_method}
            </span>
          </div>
        )}
        <div className="mt-2 flex justify-between">
          <span className="text-sm text-gray-500">Total amount:</span>
          <span className="text-sm font-medium text-gray-900">
            ${formatPrice(order.total)}
          </span>
        </div>
        <div className="mt-2 flex justify-end">
          <Link
            to={`/orders/${order.id}`}
            className="text-sm font-medium text-primary transition-colors hover:text-gray-500"
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
}
