import { Outlet } from 'react-router-dom';
import { MainContent } from '../MainContent/MainContent';
import { Footer } from '../Footer/Footer';
import { TopBar } from '../TopBar/TopBar';
import { Hero } from '../Hero/Hero';
import { useLocation } from 'react-router-dom';

export function Layout() {
  const location = useLocation();
  const isProductPage = /^\/[^/]+\/[^/]+$/.test(location.pathname);

  return (
    <MainContent>
      <>
        <TopBar />
        {!isProductPage && <Hero />}
      </>
      <Outlet />
      <Footer />
    </MainContent>
  );
}
