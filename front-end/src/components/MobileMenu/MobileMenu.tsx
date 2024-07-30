import { Navigation } from '../Navigation/Navigation';

interface MobileMenuProps {
  isOpen: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="py-4 shadow-lg md:hidden">
      <Navigation className="flex-col gap-4" />
    </div>
  );
}
