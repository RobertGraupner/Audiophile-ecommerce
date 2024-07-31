import styles from './Hero.module.css';

import { useLocation } from 'react-router-dom';

export function Hero() {
  const location = useLocation();
  const category = location.pathname.slice(1);

  if (!category) {
    return (
      <section
        className={`${styles.section} bg-secondary bg-cover bg-center bg-no-repeat`}
      >
        <div className="mx-auto max-w-[1120px] px-8 xl:px-0">
          <div className="flex flex-col items-center gap-6 pb-40 pt-32 text-white md:w-1/2 md:items-start">
            <h1 className="text-sm uppercase tracking-[10px] opacity-50">
              New product
            </h1>
            <h2 className="text-center text-4xl font-bold uppercase leading-[58px] tracking-[2px] sm:text-[56px] md:text-start">
              XX99 Mark II Headphones
            </h2>
            <p className="text-center text-[15px] leading-6 opacity-75 md:text-start">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="mt-4 h-12 w-40 bg-primary text-xs font-medium uppercase tracking-[1px] hover:bg-primary-light">
              See product
            </button>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="bg-secondary">
        <div className="mx-auto flex h-60 max-w-[1120px] items-center justify-center">
          <h1 className="sm:tracking[1.5px] text-[28px] font-medium uppercase leading-[44px] tracking-[2px] text-white sm:text-[40px]">
            {category}
          </h1>
        </div>
      </section>
    );
  }
}
