import { FC } from 'react';

import { WithTheme } from './providers/WithTheme';
import { WithUIKitConfig } from './providers/WithUIKitConfig';

export const App: FC = () => {
  return (
    <WithTheme>
      <WithUIKitConfig></WithUIKitConfig>
    </WithTheme>
  );
};
