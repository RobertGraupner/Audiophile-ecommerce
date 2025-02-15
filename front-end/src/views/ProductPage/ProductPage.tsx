import { useLoaderData } from 'react-router-dom';
import { ProductDetails } from '../../components/ProductDetails/ProductDetails';
import { AboutUs } from '../../components/AboutUs/AboutUs';
import { CategoryList } from '../../components/CategoryList/CategoryList';
import { Product } from '../../types/product';

export function ProductPage() {
  const productData = useLoaderData() as Product[];

  return (
    <main className="bg-white px-8 pb-40 lg:px-10">
      <ProductDetails product={productData} />
      <CategoryList />
      <AboutUs />
    </main>
  );
}
