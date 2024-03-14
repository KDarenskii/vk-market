import { FC } from 'react';

import { CartPage } from 'pages/CartPage';

import { WithTheme } from './providers/WithTheme';
import { WithUIKitConfig } from './providers/WithUIKitConfig';

export const App: FC = () => {
  return (
    <WithTheme>
      <WithUIKitConfig>
        <CartPage />
      </WithUIKitConfig>
    </WithTheme>
  );
};
