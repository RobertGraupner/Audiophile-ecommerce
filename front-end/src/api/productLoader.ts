import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import { CATEGORY, SLUGS } from '../constants/loaderCategoryAndSlug';
import { supabase } from '../lib/supabase';

export const productLoader = async ({ params }: LoaderFunctionArgs) => {
  const { category, slug } = params;

  if (
    !category ||
    !slug ||
    !CATEGORY.includes(category) ||
    !SLUGS.includes(slug)
  ) {
    return redirect('/');
  }

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', category)
    .eq('slug', slug);

  if (error) {
    console.error('Supabase error:', error);
    throw new Response('Failed to load data', { status: 500 });
  }

  if (!data || data.length === 0) {
    return redirect('/');
  }

  return data;
};
