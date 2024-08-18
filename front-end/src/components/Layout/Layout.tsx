import { Outlet } from 'react-router-dom';
import { MainContent } from '../MainContent/MainContent';
import { Footer } from '../Footer/Footer';
import { TopBar } from '../TopBar/TopBar';
import { Hero } from '../Hero/Hero';
import { Cart } from '../Cart/Cart';
import { useLocation } from 'react-router-dom';
import { CartProvider } from '../../contexts/CartContext';

export function Layout() {
  const location = useLocation();
  const isProductPage =
    /^\/[^/]+\/[^/]+$/.test(location.pathname) ||
    location.pathname === '/checkout';

  return (
    <CartProvider>
      <MainContent>
        <>
          <TopBar />
          {!isProductPage && <Hero />}
        </>
        <Outlet />
        <Footer />
      </MainContent>
      <Cart />
    </CartProvider>
  );
}
