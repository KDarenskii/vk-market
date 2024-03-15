import { FC } from 'react';

import { RouterProvider } from 'react-router-dom';

import { routerConfig } from 'app/config/routerConfig';

export const Router: FC = () => {
  return <RouterProvider router={routerConfig} />;
};
