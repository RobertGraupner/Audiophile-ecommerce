import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/formatPrice';
import { calculateTotal } from '../../utils/calculateTotalPrice';
import { fixImagePath } from '../../utils/fixImagePath';
import { shortenName } from '../../utils/shortenName';
import { SHIPPING_COST, VAT_RATE } from '../../constants/prices';
import ConfirmationIcon from '../../assets/checkout/icon-order-confirmation.svg';

interface ConfirmationModalProps {
  onClose: () => void;
}

export function ConfirmationModal({ onClose }: ConfirmationModalProps) {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();

  const subtotal = calculateTotal(cartItems);
  const shipping = SHIPPING_COST;
  const vat = subtotal * VAT_RATE;
  const grandTotal = subtotal + shipping + vat;

  const handleClose = () => {
    clearCart();
    onClose();
    navigate('/');
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6 backdrop-blur-sm transition-all duration-300">
      <div className="animate-modalSlideIn w-full max-w-[540px] transform rounded-lg bg-white p-8 transition-all duration-300 md:p-12">
        <img src={ConfirmationIcon} alt="Order confirmed" className="mb-8" />
        <h2 className="mb-6 text-2xl font-bold uppercase md:text-3xl">
          Thank you
          <br />
          for your order
        </h2>
        <p className="mb-6 text-[15px] opacity-50">
          You will receive an email confirmation shortly.
        </p>
        <div className="mb-6 flex flex-col overflow-hidden rounded-lg md:flex-row">
          <div className="bg-light-grey p-4 md:flex-1 md:rounded-l-lg">
            {cartItems.slice(0, 1).map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-300 pb-3"
              >
                <div className="flex items-center">
                  <img
                    src={fixImagePath(item.image)}
                    alt={item.name}
                    className="mr-4 h-16 w-16 rounded-lg"
                  />
                  <div>
                    <p className="font-bold">{shortenName(item.name)}</p>
                    <p className="text-sm opacity-50">
                      $ {formatPrice(item.price)}
                    </p>
                  </div>
                </div>
                <p className="text-[15px] opacity-50">x{item.quantity}</p>
              </div>
            ))}
            {cartItems.length > 1 && (
              <p className="mt-3 text-center text-xs font-bold opacity-50">
                and {cartItems.length - 1} other item(s)
              </p>
            )}
          </div>
          <div className="bg-black p-4 text-white md:flex md:w-[40%] md:flex-col md:justify-center md:rounded-r-lg">
            <p className="mb-2 text-[15px] uppercase opacity-50">Grand Total</p>
            <p className="text-lg font-bold">$ {formatPrice(grandTotal)}</p>
          </div>
        </div>
        <button
          onClick={handleClose}
          className="h-12 w-full bg-primary text-xs font-medium uppercase tracking-[1px] text-white hover:bg-primary-light"
        >
          Back to home
        </button>
      </div>
    </div>,
    document.getElementById('portal-root')!
  );
}
