import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../types/product';
import { ProductDetails } from '../../components/ProductDetails/ProductDetails';
import { AboutUs } from '../../components/AboutUs/AboutUs';
import { CategoryList } from '../../components/CategoryList/CategoryList';

export function ProductPage() {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const [productData, setProductData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/${category}?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [slug, category]);

  if (isLoading) return <div className="py-16 text-center">Loading...</div>;
  if (error)
    return <div className="py-16 text-center text-red-500">{error}</div>;

  return (
    <main className="bg-white px-8 pb-40 lg:px-10">
      <ProductDetails product={productData} />
      <CategoryList />
      <AboutUs />
    </main>
  );
}
