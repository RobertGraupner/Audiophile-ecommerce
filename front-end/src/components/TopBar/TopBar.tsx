import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { HiMenu } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import cart from '../../assets/shared/desktop/icon-cart.svg';

export function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);

    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-secondary text-white">
      <div className="mx-auto flex max-w-[1440px] justify-between px-8 py-9 text-center lg:px-10 xl:px-40">
        <button
          onClick={handleMenuToggle}
          className="text-2xl md:hidden"
          aria-label="Toggle mobile menu"
        >
          <HiMenu className="h-6" />
        </button>
        <Logo />
        <Navigation className="hidden flex-row gap-9 sm:flex-row md:flex" />
        <button className="h-5" aria-label="Shopping cart">
          <img src={cart} alt="cart" />
        </button>
      </div>
      <hr className="mx-auto max-w-[1120px] border-white border-opacity-20" />

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} />
    </header>
  );
}
