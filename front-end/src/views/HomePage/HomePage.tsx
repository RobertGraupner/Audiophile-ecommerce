import { AboutUs } from '../../components/AboutUs/AboutUs';
import { CategoryList } from '../../components/CategoryList/CategoryList';
import { FeaturedProducts } from '../../components/FeaturedProducts/FeaturedProducts';

export function HomePage() {
  return (
    <main className="bg-white px-8 pb-40 lg:px-10">
      <CategoryList />
      <FeaturedProducts />
      <AboutUs />
    </main>
  );
}
