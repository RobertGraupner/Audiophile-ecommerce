import { Outlet } from 'react-router-dom';
import { MainContent } from '../MainContent/MainContent';
import { Footer } from '../Footer/Footer';
import { TopBar } from '../TopBar/TopBar';
import { Hero } from '../Hero/Hero';

export function Layout() {
  return (
    <MainContent>
      <div>
        <TopBar />
        <Hero />
      </div>
      <Outlet />
      <Footer />
    </MainContent>
  );
}
