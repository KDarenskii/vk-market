import { FC } from 'react';

import { CartPage } from 'pages/CartPage';

import { WithRedux } from './providers/WithRedux';
import { WithTheme } from './providers/WithTheme';
import { WithUIKitConfig } from './providers/WithUIKitConfig';

export const App: FC = () => {
  return (
    <WithTheme>
      <WithUIKitConfig>
        <WithRedux>
          <CartPage />
        </WithRedux>
      </WithUIKitConfig>
    </WithTheme>
  );
};
