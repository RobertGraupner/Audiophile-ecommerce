import { useEffect, useState } from 'react';

type AddToCartConfirmationProps = {
  productName: string;
  onClose: () => void;
};

export function AddToCartConfirmation({
  productName,
  onClose,
}: AddToCartConfirmationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, 1000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed right-4 top-28 z-50 transform transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="w-[250px] rounded-lg bg-white p-8 shadow-lg">
        <p className="text-[15px] font-bold leading-[25px] text-black">
          {productName} has been added to your cart!
        </p>
      </div>
    </div>
  );
}
