import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import { useEffect } from 'react';
import { MainContent } from '../MainContent/MainContent';
import { Footer } from '../Footer/Footer';
import { TopBar } from '../TopBar/TopBar';
import { Hero } from '../Hero/Hero';
import { Cart } from '../Cart/Cart';
import { CartProvider } from '../../contexts/CartContext';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { AuthProvider } from '../../contexts/AuthContext';

export function Layout() {
  const location = useLocation();
  const navigation = useNavigation();
  const isProductPage =
    /^\/[^/]+\/[^/]+$/.test(location.pathname) ||
    location.pathname === '/checkout' ||
    location.pathname === '/orders';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AuthProvider>
      <CartProvider>
        <MainContent>
          <>
            <TopBar />
            {!isProductPage && <Hero />}
          </>
          <main
            className={`bg-white transition-opacity duration-300 ${
              navigation.state === 'loading' ? 'opacity-50' : 'opacity-100'
            }`}
          >
            <Outlet />
          </main>
          <Footer />
        </MainContent>
        <Cart />
        {navigation.state === 'loading' && <LoadingSpinner />}
      </CartProvider>
    </AuthProvider>
  );
}
