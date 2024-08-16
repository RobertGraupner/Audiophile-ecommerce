import { fixImagePath } from '../../utils/fixImagePath';
import { Product } from '../../types/product';

interface ProductGalleryProps {
  gallery: Product['gallery'];
}

export function ProductGallery({ gallery }: ProductGalleryProps) {
  return (
    <section className="mb-24 md:mb-32 lg:mb-40">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-[2fr_3fr]">
        <div className="grid gap-5">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={fixImagePath(gallery.first.desktop)}
            />
            <source
              media="(min-width: 768px)"
              srcSet={fixImagePath(gallery.first.tablet)}
            />
            <img
              src={fixImagePath(gallery.first.mobile)}
              alt="Gallery 1"
              className="h-full w-full rounded-lg object-cover"
            />
          </picture>
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={fixImagePath(gallery.second.desktop)}
            />
            <source
              media="(min-width: 768px)"
              srcSet={fixImagePath(gallery.second.tablet)}
            />
            <img
              src={fixImagePath(gallery.second.mobile)}
              alt="Gallery 2"
              className="h-full w-full rounded-lg object-cover"
            />
          </picture>
        </div>
        <div>
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={fixImagePath(gallery.third.desktop)}
            />
            <source
              media="(min-width: 768px)"
              srcSet={fixImagePath(gallery.third.tablet)}
            />
            <img
              src={fixImagePath(gallery.third.mobile)}
              alt="Gallery 3"
              className="h-full w-full rounded-lg object-cover"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
