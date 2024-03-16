import { ChangeEvent, useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import { setProductsQuery } from 'entities/product';

import { useAppDispatch } from 'shared/hooks';
import { useDebounce } from 'shared/hooks/useDebounce';

const QUERY_NAME = 'query';

export const useProductsSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();

  const query = searchParams.get(QUERY_NAME) || '';

  const debouncedQuery = useDebounce(query);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value || null;

    value
      ? searchParams.set(QUERY_NAME, value)
      : searchParams.delete(QUERY_NAME);

    setSearchParams(searchParams);
  };

  useEffect(() => {
    dispatch(setProductsQuery(debouncedQuery));
  }, [dispatch, debouncedQuery]);

  return { query, handleSearchChange };
};
