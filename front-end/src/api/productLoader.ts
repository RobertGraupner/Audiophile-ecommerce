import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import { BACK_END_URL } from '../constants/api';
import { CATEGORY, SLUGS } from '../constants/loaderCategoryAndSlug';

export const productLoader = ({ params }: LoaderFunctionArgs) => {
  const { category, slug } = params;

  if (
    !category ||
    !slug ||
    !CATEGORY.includes(category) ||
    !SLUGS.includes(slug)
  ) {
    return redirect('/');
  }

  return fetch(`${BACK_END_URL}/${category}?slug=${slug}`);
};
