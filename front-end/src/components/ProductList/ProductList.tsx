import { ProductCard } from '../ProductCard/ProductCard';
import { Product } from '../../types/product';

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <section className="mx-auto mb-28 mt-16 flex max-w-[1120px] flex-col gap-28 sm:my-28 md:my-40 md:gap-40">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          reverse={index % 2 !== 0}
        />
      ))}
    </section>
  );
}
