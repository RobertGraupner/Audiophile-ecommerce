import headphonesImage from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakersImage from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphonesImage from '../assets/shared/desktop/image-category-thumbnail-earphones.png';

export interface Category {
  path: string;
  categoryName: string;
}

export interface ListCategory {
  id: number;
  categoryName: string;
  image: string;
}

export const CATEGORIES: Category[] = [
  {
    categoryName: 'Home',
    path: '/',
  },
  {
    categoryName: 'Headphones',
    path: '/headphones',
  },
  {
    categoryName: 'Speakers',
    path: '/speakers',
  },
  {
    categoryName: 'Earphones',
    path: '/earphones',
  },
];

export const LIST_CATEGORIES: ListCategory[] = [
  {
    id: 1,
    categoryName: 'headphones',
    image: headphonesImage,
  },
  {
    id: 2,
    categoryName: 'speakers',
    image: speakersImage,
  },
  {
    id: 3,
    categoryName: 'earphones',
    image: earphonesImage,
  },
];
