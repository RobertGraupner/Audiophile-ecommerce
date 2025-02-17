import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { HiMenu } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import cart from '../../assets/shared/desktop/icon-cart.svg';
import { useCart } from '../../hooks/useCart';
import { FaUser } from 'react-icons/fa';

import { AuthModal } from '../AuthModal/AuthModal';

import { UserMenu } from '../UserMenu/UserMenu';

export function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const { cartItems, setIsCartOpen } = useCart();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleAccountClick = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLoginClick = (isLogin: boolean) => {
    setIsLoginMode(isLogin);
    setIsUserMenuOpen(false);
    setIsAuthModalOpen(true);
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
        <div className="flex items-center gap-4">
          <div className="relative flex items-center">
            <button
              onClick={handleAccountClick}
              className="relative h-5 transform transition-transform hover:scale-110"
              aria-label="User account"
            >
              <FaUser className="h-5 w-5 text-white" />
            </button>
            <UserMenu
              isOpen={isUserMenuOpen}
              onClose={() => setIsUserMenuOpen(false)}
              onLoginClick={handleLoginClick}
            />
          </div>
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
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-white">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </div>
      <hr className="mx-auto max-w-[1120px] border-white border-opacity-20" />
      <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        defaultIsLogin={isLoginMode}
      />
    </header>
  );
}
