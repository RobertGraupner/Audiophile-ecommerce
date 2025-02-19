import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { FaUser, FaShoppingBag, FaSignOutAlt } from 'react-icons/fa';
import { Button } from '../Button/Button';

interface UserMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: (isLogin: boolean) => void;
}

export function UserMenu({ isOpen, onClose, onLoginClick }: UserMenuProps) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleOrdersClick = () => {
    navigate('/orders');
    onClose();
  };

  const handleSignOut = async () => {
    await signOut();
    onClose();
    navigate('/');
  };

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-12 z-50 min-w-[280px] rounded-lg bg-white p-6 shadow-xl">
      <div ref={menuRef} className="flex flex-col">
        {user ? (
          <>
            <div className="mb-2 flex items-center gap-2 border-b border-gray-100 pb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <FaUser className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-left text-xs text-gray-500">Login as:</p>
                <p className="text-left text-xs font-bold text-gray-900">
                  {user.user_metadata.display_name}
                </p>
                <p className="text-xs font-bold text-gray-900">{user.email}</p>
              </div>
            </div>
            <button
              onClick={handleOrdersClick}
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[13px] font-bold text-gray-700 transition-colors hover:bg-gray-100"
            >
              <FaShoppingBag className="h-4 w-4 text-primary" />
              My Orders
            </button>
            <hr className="my-2 border-gray-100" />
            <button
              onClick={handleSignOut}
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[13px] font-bold text-primary transition-colors hover:bg-primary/10"
            >
              <FaSignOutAlt className="h-4 w-4" />
              Logout
            </button>
          </>
        ) : (
          <>
            <div className="mb-4 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <FaUser className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-1 text-lg font-bold text-gray-900">
                Welcome to Audiophile
              </h3>
              <p className="mb-4 text-sm text-gray-500">
                Login to track orders and use additional functions
              </p>
              <Button
                onClick={() => onLoginClick(true)}
                bgColor="bg-primary"
                hoverColor="hover:bg-primary-light"
                textColor="text-white"
                className="w-full"
                to=""
              >
                Login
              </Button>
            </div>
            <div className="bg-gray-50 p-4 text-center">
              <p className="text-xs text-gray-500">Don't have an account?</p>
              <button
                onClick={() => onLoginClick(false)}
                className="text-[13px] font-bold text-primary transition-colors hover:text-primary-light"
              >
                Register
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
