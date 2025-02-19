import { Order } from '../../types/order';
import { formatPrice } from '../../utils/formatPrice';
import { fixImagePath } from '../../utils/fixImagePath';
import { shortenName } from '../../utils/shortenName';

interface OrdersCardItemsProps {
  items: Order['items'];
}

export function OrdersCardItems({ items }: OrdersCardItemsProps) {
  return (
    <div className="mt-4 space-y-3">
      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-3">
          <img
            src={fixImagePath(item.image)}
            alt={item.name}
            className="h-12 w-12 rounded object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">
              {shortenName(item.name)}
            </p>
            <p className="text-xs text-gray-500">
              ${formatPrice(item.price)} x {item.quantity}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
