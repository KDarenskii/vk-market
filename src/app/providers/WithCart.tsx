import { FC, PropsWithChildren, useEffect } from 'react';

import { fetchCartItems } from 'entities/cart';

import { useAppDispatch } from 'shared/hooks';

export const WithCart: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const controller = new AbortController();

    dispatch(fetchCartItems({ signal: controller.signal }));

    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return <>{children}</>;
};
