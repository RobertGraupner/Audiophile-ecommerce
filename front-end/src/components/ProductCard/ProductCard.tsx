import { Button } from '../Button/Button';
import { fixImagePath } from '../../utils/fixImagePath';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
  reverse: boolean;
}

export function ProductCard({ product, reverse }: ProductCardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-28 md:flex-row md:gap-32 ${reverse ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="w-full md:w-1/2">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={fixImagePath(product.categoryImage.desktop)}
          />
          <source
            media="(min-width: 500px)"
            srcSet={fixImagePath(product.categoryImage.tablet)}
          />
          <img
            src={fixImagePath(product.categoryImage.mobile)}
            alt={product.name}
            className="w-full rounded-lg"
          />
        </picture>
      </div>
      <div className="flex w-full flex-col items-center gap-6 text-center md:w-1/2 md:items-start md:gap-8 md:text-left">
        {product.new && (
          <p className="text-sm uppercase tracking-[10px] text-primary">
            New product
          </p>
        )}
        <h2 className="text-[40px] font-bold uppercase leading-[44px] tracking-[1.4px]">
          {product.name}
        </h2>
        <p className="text-[15px] leading-[25px] opacity-50">
          {product.description}
        </p>
        <Button
          bgColor="bg-primary"
          hoverColor="hover:bg-primary-light"
          textColor="text-white"
          to={`/${product.category}/${product.slug}`}
        >
          See Product
        </Button>
      </div>
    </div>
  );
}
