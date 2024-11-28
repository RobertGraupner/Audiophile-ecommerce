import { CategoryList } from '../../components/CategoryList/CategoryList';
import { AboutUs } from '../../components/AboutUs/AboutUs';
import { useLoaderData } from 'react-router-dom';
import { Product } from '../../types/product';
import { ProductList } from '../../components/ProductList/ProductList';

export function CategoryPage() {
  const products = useLoaderData() as Product[];

  return (
    <main className="bg-white px-8 pb-40 lg:px-10">
      <ProductList products={products} />
      <CategoryList />
      <AboutUs />
    </main>
  );
}
