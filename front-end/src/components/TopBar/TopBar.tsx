import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';

export function TopBar() {
  return (
    <header className="bg-secondary p-4 text-white">
      <div className="mx-auto flex max-w-[1440px] gap-48 px-40 text-center">
        <Logo />

        <Navigation className="w-100 hidden flex-row gap-9 md:flex" />
      </div>
    </header>
  );
}
