import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { AddToCartConfirmation } from '../AddToCartConfirmation/AddToCartConfirmation';

type AddToCartButtonProps = {
  product: {
    id: number;
    name: string;
    price: number;
    image: {
      mobile: string;
    };
  };
  quantity: number;
};

export function AddToCartButton({ product, quantity }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image.mobile,
      quantity: quantity,
    });
    setShowConfirmation(true);
  };

  return (
    <>
      <button
        className="flex h-12 w-40 items-center justify-center bg-primary text-xs font-medium uppercase tracking-[1px] text-white hover:bg-primary-light"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      {showConfirmation && (
        <AddToCartConfirmation
          productName={product.name}
          onClose={() => setShowConfirmation(false)}
        />
      )}
    </>
  );
}
