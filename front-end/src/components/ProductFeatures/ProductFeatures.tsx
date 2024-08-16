import { Product } from '../../types/product';

interface ProductFeaturesProps {
  features: Product['features'];
  includes: Product['includes'];
}

export function ProductFeatures({ features, includes }: ProductFeaturesProps) {
  return (
    <section className="mb-24 flex flex-col gap-24 md:mb-32 lg:mb-40 lg:flex-row lg:gap-32">
      <div className="lg:w-[60%]">
        <h2 className="mb-6 text-2xl font-bold uppercase leading-[36px] tracking-[1.14px] md:text-[32px]">
          Features
        </h2>
        <p className="whitespace-pre-line text-[15px] font-medium leading-[25px] opacity-50">
          {features}
        </p>
      </div>
      <div className="flex w-[80%] flex-col justify-between sm:flex-row lg:w-[40%] lg:flex-col">
        <h2 className="mb-6 text-2xl font-bold uppercase leading-[36px] tracking-[1.14px] md:text-[32px]">
          In the box
        </h2>
        <ul>
          {includes.map((item, index) => (
            <li key={index} className="mb-2 flex">
              <span className="mr-6 text-[15px] font-bold leading-[25px] text-primary">
                {item.quantity}x
              </span>
              <span className="text-[15px] font-medium leading-[25px] opacity-50">
                {item.item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
