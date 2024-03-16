import { useEffect } from 'react';

import { fetchProducts } from 'entities/product';

import { useAppDispatch } from 'shared/hooks';

export const useProducts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { abort, signal } = new AbortController();

    dispatch(fetchProducts({ signal }));

    return () => {
      abort();
    };
  }, [dispatch]);
};
