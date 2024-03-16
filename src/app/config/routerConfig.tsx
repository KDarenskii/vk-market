import { Navigate, createHashRouter } from 'react-router-dom';

import { CartPage, ProductsPage } from 'pages';

import { routes } from 'shared/constants';

export const routerConfig = createHashRouter([
  {
    path: routes.root.path,
    element: <Navigate to={routes.products.path} />,
  },
  {
    path: routes.products.path,
    element: <ProductsPage />,
  },
  {
    path: routes.cart.path,
    element: <CartPage />,
  },
  {
    path: '*',
    element: <h1>404 NOT FOUND</h1>,
  },
]);
