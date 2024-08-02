import { Button } from '../Button/Button';
import styles from './FeaturedProducts.module.css';
import patternCircles from '../../assets/home/desktop/pattern-circles.svg';
import zx9Speaker from '../../assets/home/desktop/image-speaker-zx9.png';

export function FeaturedProducts() {
  return (
    <section className="mx-auto flex max-w-[1120px] flex-col gap-8">
      {/* ZX9 Speaker */}
      <div className="relative flex min-h-[560px] flex-col items-center gap-4 overflow-hidden rounded-lg bg-primary px-0 py-14 md:px-[70px] lg:flex-row lg:py-0 xl:px-24">
        <div className="absolute inset-0 overflow-hidden">
          {/* background circles */}
          <img
            src={patternCircles}
            alt=""
            className="absolute top-[-10%] transform sm:top-[-35%] lg:left-[28%] lg:top-[75%] lg:-translate-x-1/2 lg:-translate-y-1/2"
            aria-hidden="true"
          />
        </div>

        <div className="z-20 flex flex-1 items-end justify-center md:items-center md:justify-start md:pl-5">
          <img
            src={zx9Speaker}
            alt="ZX9 Speaker"
            className="w-[197px] lg:w-[410px] lg:translate-y-[45px]"
          />
        </div>

        <div className="z-20 mt-8 flex max-w-[270px] flex-col items-center gap-6 text-center text-white sm:max-w-[350px] lg:mb-0 lg:mt-0 lg:items-start lg:text-start">
          <h2 className="text-[36px] font-bold leading-[40px] tracking-[2px] sm:text-[56px] sm:leading-[58px]">
            ZX9 SPEAKER
          </h2>
          <p className="text-[15px] leading-[25px] opacity-75">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button
            bgColor="bg-black"
            textColor="text-white"
            hoverColor="hover:bg-nardo-grey"
          >
            See product
          </Button>
        </div>
      </div>

      {/* ZX7 Speaker */}
      <div
        className={`${styles.containerSpeaker} flex min-h-[367px] flex-col items-start justify-center rounded-lg bg-cover bg-center bg-no-repeat px-10 sm:min-h-[320px] md:min-h-[298px] md:px-20`}
      >
        <div className="flex flex-col gap-8">
          <h3 className="text-[28px] uppercase tracking-[2px]">ZX7 speaker</h3>
          <Button
            bgColor="bg-transparent"
            textColor="text-black"
            hoverColor="hover:bg-black hover:text-white"
            className="border-1 border border-black"
          >
            See product
          </Button>
        </div>
      </div>

      {/* YX1 Earphones */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row lg:gap-6">
        <div
          className={`${styles.containerEarphones} min-h-[200px] flex-1 rounded-lg bg-cover bg-center bg-no-repeat sm:min-h-[320px]`}
        ></div>
        <div className="flex min-h-[200px] flex-1 flex-col justify-center gap-8 rounded-lg bg-light-grey sm:min-h-[320px]">
          <div className="flex flex-col gap-8 px-10 lg:px-14">
            <h3 className="text-[28px] uppercase tracking-[2px]">
              XY1 earphones
            </h3>
            <Button
              bgColor="bg-transparent"
              textColor="text-black"
              hoverColor="hover:bg-black hover:text-white"
              className="border-1 border border-black"
            >
              See product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
