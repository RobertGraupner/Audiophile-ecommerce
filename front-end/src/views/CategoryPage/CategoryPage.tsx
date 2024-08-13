import { CategoryList } from '../../components/CategoryList/CategoryList';
import { AboutUs } from '../../components/AboutUs/AboutUs';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Product } from '../../types/product';
import { ProductList } from '../../components/ProductList/ProductList';

export function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [category]);

  if (isLoading) return <div className="py-16 text-center">Loading...</div>;
  if (error)
    return <div className="py-16 text-center text-red-500">{error}</div>;

  return (
    <main className="bg-white px-8 pb-40 lg:px-10">
      <ProductList products={products} />
      <CategoryList />
      <AboutUs />
    </main>
  );
}
