import styles from './AboutUs.module.css';

export function AboutUs() {
  return (
    <section className="mx-auto flex min-h-[600px] max-w-[1120px] flex-col gap-8 lg:flex-row">
      <div className="order-2 flex flex-1 flex-col items-center justify-center gap-8 text-center lg:order-1 lg:items-start lg:text-start">
        <h3 className="text-bold max-w-[320px] text-[28px] uppercase leading-normal tracking-[1px] md:max-w-[445px] md:text-[40px] md:leading-[44px] md:tracking-[1.4px]">
          Bringing you the <span className="text-primary">best</span> audio gear
        </h3>
        <p className="max-w-[445px] text-[15px] leading-[25px] opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div
        className={`${styles.imageContainer} order-1 min-h-[380px] flex-1 rounded-lg bg-cover bg-center bg-no-repeat lg:order-2`}
      ></div>
    </section>
  );
}
