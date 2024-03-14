import { FC, PropsWithChildren } from 'react';

import { Provider } from 'react-redux';

import { store } from 'shared/store';

export const WithRedux: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
