import { FC } from 'react';

import { WithRedux } from './providers/WithRedux';
import { Router } from './providers/WithRouter';
import { WithTheme } from './providers/WithTheme';
import { WithUIKitConfig } from './providers/WithUIKitConfig';

export const App: FC = () => {
  return (
    <WithTheme>
      <WithUIKitConfig>
        <WithRedux>
          <Router />
        </WithRedux>
      </WithUIKitConfig>
    </WithTheme>
  );
};
