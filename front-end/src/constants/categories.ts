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
    image: 'src/assets/shared/desktop/image-category-thumbnail-headphones.png',
  },
  {
    id: 2,
    categoryName: 'speakers',
    image: 'src/assets/shared/desktop/image-category-thumbnail-speakers.png',
  },
  {
    id: 3,
    categoryName: 'earphones',
    image: 'src/assets/shared/desktop/image-category-thumbnail-earphones.png',
  },
];
