import { formatPrice } from '../../utils/formatPrice';
import { fixImagePath } from '../../utils/fixImagePath';
import { shortenName } from '../../utils/shortenName';
import ConfirmationIcon from '../../assets/checkout/icon-order-confirmation.svg';
import { CartItem } from '../../types/cartItem';

interface ConfirmationModalProps {
  onClose: () => void;
  orderItems: CartItem[];
  grandTotal: number;
}

export function ConfirmationModal({
  onClose,
  orderItems,
  grandTotal,
}: ConfirmationModalProps) {
  const firstItem = orderItems[0];
  const remainingItems = orderItems.length - 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6 backdrop-blur-sm">
      <div className="w-full max-w-[540px] rounded-lg bg-white p-8">
        <img src={ConfirmationIcon} alt="Order confirmed" className="mb-8" />
        <h2 className="mb-6 text-2xl font-bold uppercase">
          Thank you for your order
        </h2>
        <p className="mb-6 text-[15px] opacity-50">
          You will receive an email confirmation shortly.
        </p>
        <div className="mb-6 flex flex-col overflow-hidden rounded-lg md:flex-row">
          <div className="bg-light-grey p-4 md:flex-1 md:rounded-l-lg">
            <div className="flex items-center justify-between border-b border-gray-300 pb-3">
              <div className="flex items-center">
                <img
                  src={fixImagePath(firstItem.image)}
                  alt={firstItem.name}
                  className="mr-4 h-16 w-16 rounded-lg"
                />
                <div>
                  <p className="font-bold">{shortenName(firstItem.name)}</p>
                  <p className="text-sm opacity-50">
                    $ {formatPrice(firstItem.price)}
                  </p>
                </div>
              </div>
              <p className="text-[15px] opacity-50">x{firstItem.quantity}</p>
            </div>
            {remainingItems > 0 && (
              <p className="mt-3 text-center text-xs font-bold opacity-50">
                and {remainingItems} other item(s)
              </p>
            )}
          </div>
          <div className="bg-black p-4 text-white md:flex md:w-[40%] md:flex-col md:justify-center md:rounded-r-lg">
            <p className="mb-2 text-[15px] uppercase opacity-50">Grand Total</p>
            <p className="text-lg font-bold">$ {formatPrice(grandTotal)}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-8 h-12 w-full bg-primary text-white hover:bg-primary-light"
        >
          BACK TO HOME
        </button>
      </div>
    </div>
  );
}
