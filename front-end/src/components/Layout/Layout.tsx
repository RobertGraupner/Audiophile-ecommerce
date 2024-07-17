import { Outlet } from 'react-router-dom';
import { MainContent } from '../MainContent/MainContent';
import { Footer } from '../Footer/Footer';
import { TopBar } from '../TopBar/TopBar';

export function Layout() {
  return (
    <MainContent>
      <TopBar />
      <Outlet />
      <Footer />
    </MainContent>
  );
}
