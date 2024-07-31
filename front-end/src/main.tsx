import './styles/globals.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from 'react-router-dom';
import { Layout } from './components/Layout/Layout.tsx';
import { Home } from './views/Home/Home.tsx';
import { Headphones } from './views/Headphones/Headphones.tsx';
import { Speakers } from './views/Speakers/Speakers.tsx';
import { Earphones } from './views/Earphones/Earphones.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'headphones',
        element: <Headphones />,
      },
      {
        path: 'speakers',
        element: <Speakers />,
      },
      {
        path: 'earphones',
        element: <Earphones />,
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
