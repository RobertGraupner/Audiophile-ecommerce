import styles from './Hero.module.css';

import { useParams } from 'react-router-dom';
import { Button } from '../Button/Button';

export function Hero() {
  const { category } = useParams<{ category: string }>();

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
            <Button
              bgColor="bg-primary"
              hoverColor="hover:bg-primary-light"
              textColor="text-white"
              to="/headphones/xx99-mark-two-headphones"
            >
              See product
            </Button>
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
