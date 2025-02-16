import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import { CATEGORY } from '../constants/loaderCategoryAndSlug';
import { supabase } from '../lib/supabase';

export const categoryLoader = async ({ params }: LoaderFunctionArgs) => {
  const { category } = params;

  if (!category || !CATEGORY.includes(category)) {
    return redirect('/');
  }

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', category);

  if (error) {
    console.error('Supabase error:', error);
    throw new Response('Failed to load data', { status: 500 });
  }

  return data;
};
