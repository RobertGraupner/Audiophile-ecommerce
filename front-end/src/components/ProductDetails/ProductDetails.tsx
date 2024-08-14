import { Product } from '../../types/product';
import { Button } from '../Button/Button';
import { fixImagePath } from '../../utils/fixImagePath';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface ProductDetailsProps {
  product: Product[];
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const productData = product[0];

  return (
    <div className="mx-auto max-w-[1120px] py-8 md:py-20">
      <Link
        to={`/${productData.category}`}
        className="text-[15px] leading-[25px] opacity-50 hover:text-primary hover:opacity-100"
      >
        Go Back
      </Link>

      <div className="mb-20 mt-14 flex flex-col gap-8 md:mb-28 md:flex-row md:items-center md:gap-16 lg:mb-40 lg:gap-32">
        <div className="w-full md:w-[40%] lg:w-[50%]">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={fixImagePath(productData.image.desktop)}
            />
            <source
              media="(min-width: 768px)"
              srcSet={fixImagePath(productData.image.tablet)}
            />
            <img
              src={fixImagePath(productData.image.mobile)}
              alt={productData.name}
              className="w-full rounded-lg"
            />
          </picture>
        </div>

        <div className="flex w-full flex-col gap-6 md:w-[60%] lg:w-[50%]">
          {productData.new && (
            <p className="text-sm uppercase tracking-[10px] text-primary">
              New product
            </p>
          )}
          <h1 className="text-[28px] font-bold uppercase leading-[32px] tracking-[1px] md:text-[40px] md:leading-[44px] md:tracking-[1.4px]">
            {productData.name}
          </h1>
          <p className="text-[15px] font-medium leading-[25px] opacity-50">
            {productData.description}
          </p>
          <p className="mb-4 text-[18px] font-bold tracking-[1.3px]">
            ${productData.price}
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

      <div className="mb-24 flex flex-col gap-24 md:mb-32 lg:mb-40 lg:flex-row lg:gap-32">
        <div className="lg:w-[60%]">
          <h2 className="mb-6 text-2xl font-bold uppercase leading-[36px] tracking-[1.14px] md:text-[32px]">
            Features
          </h2>
          <p className="whitespace-pre-line text-[15px] font-medium leading-[25px] opacity-50">
            {productData.features}
          </p>
        </div>
        <div className="flex w-[80%] flex-col justify-between sm:flex-row lg:w-[40%] lg:flex-col">
          <h2 className="mb-6 text-2xl font-bold uppercase leading-[36px] tracking-[1.14px] md:text-[32px]">
            In the box
          </h2>
          <ul>
            {productData.includes.map((item, index) => (
              <li key={index} className="mb-2 flex">
                <span className="mr-6 text-[15px] font-bold leading-[25px] text-primary">
                  {item.quantity}x
                </span>
                <span className="text-[15px] font-medium leading-[25px] opacity-50">
                  {item.item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mb-24 md:mb-32 lg:mb-40">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-[2fr_3fr]">
          <div className="grid gap-5">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={fixImagePath(productData.gallery.first.desktop)}
              />
              <source
                media="(min-width: 768px)"
                srcSet={fixImagePath(productData.gallery.first.tablet)}
              />
              <img
                src={fixImagePath(productData.gallery.first.mobile)}
                alt="Gallery 1"
                className="h-full w-full rounded-lg object-cover"
              />
            </picture>
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={fixImagePath(productData.gallery.second.desktop)}
              />
              <source
                media="(min-width: 768px)"
                srcSet={fixImagePath(productData.gallery.second.tablet)}
              />
              <img
                src={fixImagePath(productData.gallery.second.mobile)}
                alt="Gallery 2"
                className="h-full w-full rounded-lg object-cover"
              />
            </picture>
          </div>
          <div>
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={fixImagePath(productData.gallery.third.desktop)}
              />
              <source
                media="(min-width: 768px)"
                srcSet={fixImagePath(productData.gallery.third.tablet)}
              />
              <img
                src={fixImagePath(productData.gallery.third.mobile)}
                alt="Gallery 3"
                className="h-full w-full rounded-lg object-cover"
              />
            </picture>
          </div>
        </div>
      </div>

      <div className="mb-8 md:mb-0">
        <h2 className="mb-10 text-center text-2xl font-bold uppercase leading-[36px] tracking-[1.14px] md:text-[32px]">
          You may also like
        </h2>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3">
          {productData.others.map((item, index) => (
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
      </div>
    </div>
  );
}
