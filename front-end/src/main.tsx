import './styles/globals.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from 'react-router-dom';
import { Layout } from './components/Layout/Layout.tsx';
import { HomePage } from './views/HomePage/HomePage.tsx';
import { CategoryPage } from './views/CategoryPage/CategoryPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/:category',
        element: <CategoryPage />,
      },
      {
        path: '*',
        loader: () => redirect('/'),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
