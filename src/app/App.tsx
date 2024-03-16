import { FC } from 'react';

import { WithCart } from './providers/WithCart';
import { WithRedux } from './providers/WithRedux';
import { Router } from './providers/WithRouter';
import { WithTheme } from './providers/WithTheme';
import { WithUIKitConfig } from './providers/WithUIKitConfig';

export const App: FC = () => {
  return (
    <WithTheme>
      <WithUIKitConfig>
        <WithRedux>
          <WithCart>
            <Router />
          </WithCart>
        </WithRedux>
      </WithUIKitConfig>
    </WithTheme>
  );
};
