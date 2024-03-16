import { useEffect } from 'react';

import { fetchProducts } from 'entities/product';

import { useAppDispatch } from 'shared/hooks';

export const useProducts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const controller = new AbortController();

    dispatch(fetchProducts({ signal: controller.signal }));

    return () => {
      controller.abort();
    };
  }, [dispatch]);
};
