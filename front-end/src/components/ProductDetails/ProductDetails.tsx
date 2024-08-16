import { Product } from '../../types/product';
import { Button } from '../Button/Button';
import { fixImagePath } from '../../utils/fixImagePath';
import { Link } from 'react-router-dom';
import { RelatedProducts } from '../RelatedProducts/RelatedProducts';
import { ProductGallery } from '../ProductGallery/ProductGallery';
import { ProductFeatures } from '../ProductFeatures/ProductFeatures';
import { ProductInfo } from '../ProductInfo/ProductInfo';

interface ProductDetailsProps {
  product: Product[];
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const productData = product[0];

  return (
    <div className="mx-auto max-w-[1120px] py-8 md:py-20">
      <Link
        to={`/${productData.category}`}
        className="text-[15px] leading-[25px] opacity-50 hover:text-primary hover:opacity-100"
      >
        Go Back
      </Link>

      <ProductInfo product={productData} />
      <ProductFeatures
        features={productData.features}
        includes={productData.includes}
      />
      <ProductGallery gallery={productData.gallery} />
      <RelatedProducts otherProducts={productData.others} />
    </div>
  );
}
