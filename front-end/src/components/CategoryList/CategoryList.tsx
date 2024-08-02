import { Link } from 'react-router-dom';
import { LIST_CATEGORIES } from '../../constants/categories';
import arrowRight from '../../assets/shared/desktop/icon-arrow-right.svg';

export function CategoryList() {
  return (
    <section className="mx-auto mb-40 mt-20 max-w-[1120px] sm:mt-[200px]">
      <ul className="flex flex-col justify-between gap-[68px] sm:flex-row sm:gap-8">
        {LIST_CATEGORIES.map(({ id, categoryName, image }) => (
          <li
            key={id}
            className="flex flex-1 flex-col items-center justify-center rounded-lg bg-light-grey pb-7"
          >
            <img
              src={image}
              alt={categoryName}
              className="mt-[-11%] w-[35%] sm:mt-[-19%] sm:w-[54%]"
            />
            <h2 className="mb-4 text-lg font-bold tracking-[1.3px] text-black">
              {categoryName.toUpperCase()}
            </h2>
            <Link
              to={`/category/${categoryName}`}
              className="flex items-center justify-center gap-4 text-[13px] font-bold uppercase tracking-[1px] opacity-50 hover:text-primary hover:opacity-100"
            >
              Shop <img src={arrowRight} alt="Arrow Right" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
