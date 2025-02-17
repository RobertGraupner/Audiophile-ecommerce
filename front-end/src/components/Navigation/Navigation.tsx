import { NavLink } from 'react-router-dom';
import { CATEGORIES } from '../../constants/categories.ts';

interface NavigationProps {
  className?: string;
  onItemClick?: () => void;
}

export function Navigation({ className = '', onItemClick }: NavigationProps) {
  return (
    <ul
      className={`flex flex-col items-center justify-between text-sm font-bold uppercase leading-6 tracking-[2px] ${className}`}
    >
      {CATEGORIES.map((item) => (
        <li key={item.path} onClick={onItemClick}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `text-sm font-bold uppercase tracking-[2px] transition-colors duration-200 ${isActive ? 'text-primary' : 'text-white hover:text-primary/80'}`
            }
          >
            {item.categoryName}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
