import { NavLink } from 'react-router-dom';
import { CATEGORIES, Category } from '../../constants/categories.ts';

export function Navigation({ className = '' }: { className?: string }) {
  return (
    <ul
      className={`flex flex-col items-center justify-between text-sm font-bold uppercase leading-6 tracking-[2px] sm:flex-row ${className}`}
    >
      {CATEGORIES.map((item: Category) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            className="text-sm font-bold uppercase tracking-[2px] hover:text-primary"
          >
            {item.categoryName}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
