import './styles/globals.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout/Layout.tsx';
import { HomePage } from './views/HomePage/HomePage.tsx';
import { CategoryPage } from './views/CategoryPage/CategoryPage.tsx';
import { ProductPage } from './views/ProductPage/ProductPage.tsx';
import { CheckoutPage } from './views/CheckoutPage/CheckoutPage.tsx';
import { ErrorElement } from './components/ErrorElement/ErrorElement.tsx';
import { categoryLoader } from './api/productListLoader.ts';
import { productLoader } from './api/productLoader.ts';
import { OrdersPage } from './views/OrdersPage/OrdersPage.tsx';
import { OrderDetailsPage } from './views/OrderDetailsPage/OrderDetailsPage.tsx';
import { ordersLoader, orderDetailsLoader } from './api/ordersLoader';

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
        path: '/checkout',
        element: <CheckoutPage />,
      },
      {
        path: '/:category',
        element: <CategoryPage />,
        loader: categoryLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: '/:category/:slug',
        element: <ProductPage />,
        loader: productLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: '/orders',
        element: <OrdersPage />,
        loader: ordersLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: '/orders/:orderId',
        element: <OrderDetailsPage />,
        loader: orderDetailsLoader,
        errorElement: <ErrorElement />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
