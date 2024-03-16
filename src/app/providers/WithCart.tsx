import { FC, PropsWithChildren, useEffect } from 'react';

import { fetchCartItems } from 'entities/cart';

import { useAppDispatch } from 'shared/hooks';

export const WithCart: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  return <>{children}</>;
};
