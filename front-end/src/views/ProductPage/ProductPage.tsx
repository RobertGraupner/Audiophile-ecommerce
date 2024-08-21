import { useLoaderData, useNavigation } from 'react-router-dom';
import { ProductDetails } from '../../components/ProductDetails/ProductDetails';
import { AboutUs } from '../../components/AboutUs/AboutUs';
import { CategoryList } from '../../components/CategoryList/CategoryList';
import { Product } from '../../types/product';

export function ProductPage() {
  const productData = useLoaderData() as Product[];

  const navigation = useNavigation();

  if (navigation.state === 'loading') {
    return <div className="py-16 text-center">Loading...</div>;
  }

  return (
    <main className="bg-white px-8 pb-40 lg:px-10">
      <ProductDetails product={productData} />
      <CategoryList />
      <AboutUs />
    </main>
  );
}
