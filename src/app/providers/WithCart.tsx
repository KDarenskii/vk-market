import { FC, PropsWithChildren, useEffect } from 'react';

import { fetchCartItems } from 'entities/cart';

import { useAppDispatch } from 'shared/hooks';

export const WithCart: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { abort, signal } = new AbortController();

    dispatch(fetchCartItems({ signal }));

    return () => {
      abort();
    };
  }, [dispatch]);

  return <>{children}</>;
};
