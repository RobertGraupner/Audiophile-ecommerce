import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { HiMenu } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import cart from '../../assets/shared/desktop/icon-cart.svg';
import { useCart } from '../../hooks/useCart';

export function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems, setIsCartOpen } = useCart();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
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
        <button
          className="relative h-5 transform transition-transform hover:scale-110"
          aria-label="Shopping cart"
          onClick={handleCartClick}
        >
          <img
            src={cart}
            alt="cart"
            className="transition-opacity hover:opacity-80"
          />
          {cartItems.length > 0 && (
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-white transition-all duration-200">
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </button>
      </div>
      <hr className="mx-auto max-w-[1120px] border-white border-opacity-20" />
      <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </header>
  );
}
