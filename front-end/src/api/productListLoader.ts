import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import { BACK_END_URL } from '../constants/api';
import { CATEGORY } from '../constants/loaderCategoryAndSlug';

export const categoryLoader = async ({ params }: LoaderFunctionArgs) => {
  const { category } = params;

  if (!category || !CATEGORY.includes(category)) {
    return redirect('/');
  }

  const response = await fetch(`${BACK_END_URL}/${category}`);

  if (!response.ok) {
    throw new Response(`Failed to load data: ${response.statusText}`, {
      status: response.status,
    });
  }

  return response;
};
