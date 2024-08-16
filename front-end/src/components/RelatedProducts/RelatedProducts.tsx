import { Button } from '../Button/Button';
import { fixImagePath } from '../../utils/fixImagePath';
import { Product } from '../../types/product';

interface RelatedProductsProps {
  otherProducts: Product['others'];
}

export function RelatedProducts({ otherProducts }: RelatedProductsProps) {
  return (
    <section className="mb-8 md:mb-0">
      <h2 className="mb-10 text-center text-2xl font-bold uppercase leading-[36px] tracking-[1.14px] md:text-[32px]">
        You may also like
      </h2>
      <div className="grid grid-cols-1 gap-14 md:grid-cols-3">
        {otherProducts.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <picture className="mb-8 w-full">
              <source
                media="(min-width: 1024px)"
                srcSet={fixImagePath(item.image.desktop)}
              />
              <source
                media="(min-width: 768px)"
                srcSet={fixImagePath(item.image.tablet)}
              />
              <img
                src={fixImagePath(item.image.mobile)}
                alt={item.name}
                className="w-full rounded-lg object-cover"
              />
            </picture>
            <h3 className="mb-8 text-center text-2xl font-bold uppercase leading-[33px] tracking-[1.71px]">
              {item.name}
            </h3>
            <Button
              bgColor="bg-primary"
              hoverColor="hover:bg-primary-light"
              textColor="text-white"
              to={`/${item.category}/${item.slug}`}
            >
              See Product
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
