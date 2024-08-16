import { useState } from 'react';
import { fixImagePath } from '../../utils/fixImagePath';
import { Button } from '../Button/Button';
import { Product } from '../../types/product';

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="mb-20 mt-14 flex flex-col gap-8 md:mb-28 md:flex-row md:items-center md:gap-16 lg:mb-40 lg:gap-32">
      <div className="w-full md:w-[40%] lg:w-[50%]">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={fixImagePath(product.image.desktop)}
          />
          <source
            media="(min-width: 768px)"
            srcSet={fixImagePath(product.image.tablet)}
          />
          <img
            src={fixImagePath(product.image.mobile)}
            alt={product.name}
            className="w-full rounded-lg"
          />
        </picture>
      </div>

      <div className="flex w-full flex-col gap-6 md:w-[60%] lg:w-[50%]">
        {product.new && (
          <p className="text-sm uppercase tracking-[10px] text-primary">
            New product
          </p>
        )}
        <h1 className="text-[28px] font-bold uppercase leading-[32px] tracking-[1px] md:text-[40px] md:leading-[44px] md:tracking-[1.4px]">
          {product.name}
        </h1>
        <p className="text-[15px] font-medium leading-[25px] opacity-50">
          {product.description}
        </p>
        <p className="mb-4 text-[18px] font-bold tracking-[1.3px]">
          ${product.price}
        </p>

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-32 items-center justify-between bg-light-grey px-4">
            <button
              className="text-[13px] font-bold tracking-[1px] opacity-25 hover:text-primary hover:opacity-100"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              -
            </button>
            <span className="text-[13px] font-bold tracking-[1px]">
              {quantity}
            </span>
            <button
              className="text-[13px] font-bold tracking-[1px] opacity-25 hover:text-primary hover:opacity-100"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>

          <Button
            bgColor="bg-primary"
            hoverColor="hover:bg-primary-light"
            textColor="text-white"
            to="/cart"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
