export interface Category {
  path: string;
  categoryName: string;
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
