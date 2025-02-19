import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/formatPrice';
import { calculateTotal } from '../../utils/calculateTotalPrice';
import { fixImagePath } from '../../utils/fixImagePath';
import { shortenName } from '../../utils/shortenName';
import { SHIPPING_COST, VAT_RATE } from '../../constants/prices';

interface CheckoutSummaryProps {
  isSubmitting: boolean;
}

export function CheckoutSummary({ isSubmitting }: CheckoutSummaryProps) {
  const { cartItems } = useCart();

  const subtotal = calculateTotal(cartItems);
  const shipping = SHIPPING_COST;
  const vat = subtotal * VAT_RATE;
  const total = subtotal + shipping + vat;

  return (
    <section className="rounded-lg bg-white p-6">
      <h2 className="mb-4 text-xl font-bold">Summary</h2>
      <ul className="mb-6">
        {cartItems.map((item) => (
          <li key={item.id} className="mb-4 flex justify-between">
            <div className="flex items-center">
              <img
                src={fixImagePath(item.image)}
                alt={item.name}
                className="mr-4 h-16 w-16 rounded object-cover"
              />
              <div>
                <p className="font-bold">{shortenName(item.name)} </p>
                <p className="text-sm opacity-50">
                  $ {formatPrice(item.price)}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-[15px] leading-[25px] opacity-50">
                x{item.quantity}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-2 text-[15px] leading-[25px]">
        <div className="flex justify-between">
          <p className="opacity-50">TOTAL</p>
          <p className="font-bold">$ {formatPrice(subtotal)}</p>
        </div>
        <div className="flex justify-between">
          <p className="opacity-50">SHIPPING</p>
          <p className="font-bold">$ {formatPrice(shipping)}</p>
        </div>
        <div className="flex justify-between">
          <p className="opacity-50">VAT (INCLUDED)</p>
          <p className="font-bold">$ {formatPrice(vat)}</p>
        </div>
        <div className="flex justify-between border-t pt-4">
          <p className="opacity-50">GRAND TOTAL</p>
          <p className="font-bold text-primary">$ {formatPrice(total)}</p>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 h-12 w-full bg-primary text-[13px] tracking-[1px] text-white transition duration-300 hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? 'Processing...' : 'CONTINUE & PAY'}
      </button>
    </section>
  );
}
