import { createPortal } from 'react-dom';
import { useCart } from '../../hooks/useCart';
import { Button } from '../Button/Button';
import { fixImagePath } from '../../utils/fixImagePath';
import { calculateTotal } from '../../utils/calculateTotalPrice';
import { shortenName } from '../../utils/shortenName';
import { formatPrice } from '../../utils/formatPrice';
import { useRef, useEffect } from 'react';

export function Cart() {
  const { cartItems, updateQuantity, clearCart, isCartOpen, setIsCartOpen } =
    useCart();

  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    };

    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen, setIsCartOpen]);

  const total = calculateTotal(cartItems);

  if (!isCartOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-300">
      <div className="mx-auto mt-28 flex w-full max-w-[1120px] items-center justify-center md:justify-end">
        <div
          ref={cartRef}
          className="animate-slideIn flex w-full max-w-[377px] transform flex-col gap-6 rounded-lg bg-white p-8 shadow-lg transition-all duration-300"
        >
          <div className="mb-8 flex justify-between">
            <h2 className="text-lg font-bold uppercase leading-normal tracking-[1.3px]">
              Cart ({cartItems.length})
            </h2>
            {cartItems.length > 0 && (
              <button
                onClick={() => clearCart()}
                className="text-[15px] leading-[25px] text-black opacity-50 hover:text-primary hover:opacity-100"
              >
                Remove all
              </button>
            )}
          </div>

          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8">
              <p className="mb-4 text-lg font-bold text-black">
                Your cart is empty
              </p>
              <p className="mb-6 text-center text-sm text-black opacity-50">
                Looks like you haven't added any items to your cart yet.
              </p>
              <button
                className="flex h-12 w-full items-center justify-center bg-primary text-xs font-medium uppercase tracking-[1px] text-white hover:bg-primary-light"
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div className="bg-light-gray flex items-center">
                    <img
                      src={fixImagePath(item.image)}
                      alt={item.name}
                      className="mr-4 h-16 w-16 rounded-lg"
                    />
                    <div>
                      <p className="font-bold">{shortenName(item.name)}</p>
                      <p className="text-sm text-black opacity-50">
                        $ {formatPrice(item.price)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center bg-light-grey">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-2 text-black opacity-25 hover:text-primary hover:opacity-100"
                    >
                      -
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-2 text-black opacity-25 hover:text-primary hover:opacity-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}

              <div className="mb-6 flex justify-between">
                <span className="text-[15px] uppercase leading-[25px] text-black opacity-50">
                  Total
                </span>
                <span className="text-lg font-bold">
                  $ {formatPrice(total)}
                </span>
              </div>

              <Button
                to="/checkout"
                bgColor="bg-primary"
                hoverColor="hover:bg-primary-light"
                textColor="text-white"
                className="w-full"
                onClick={() => setIsCartOpen(false)}
              >
                Checkout
              </Button>
            </>
          )}
        </div>
      </div>
    </div>,
    document.getElementById('portal-root')!
  );
}
