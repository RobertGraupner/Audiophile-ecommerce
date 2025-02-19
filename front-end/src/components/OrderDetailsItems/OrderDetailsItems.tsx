import { Order } from '../../types/order';
import { formatPrice } from '../../utils/formatPrice';
import { fixImagePath } from '../../utils/fixImagePath';
import { shortenName } from '../../utils/shortenName';

interface OrderDetailsItemsProps {
  items: Order['items'];
}

export function OrderDetailsItems({ items }: OrderDetailsItemsProps) {
  return (
    <div>
      <h2 className="mb-4 text-lg font-bold text-gray-900">Items</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <img
              src={fixImagePath(item.image)}
              alt={item.name}
              className="h-16 w-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <p className="font-semibold text-gray-900">
                {shortenName(item.name)}
              </p>
              <p className="text-sm text-gray-500">
                ${formatPrice(item.price)} x {item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
