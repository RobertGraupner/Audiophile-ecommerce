import { Navigation } from '../Navigation/Navigation';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  if (!isOpen) return null;

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="py-4 shadow-lg md:hidden">
      <Navigation className="flex-col gap-4" onItemClick={handleCloseMenu} />
    </div>
  );
}
