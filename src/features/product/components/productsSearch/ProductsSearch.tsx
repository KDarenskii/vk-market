import { FC } from 'react';

import { Search } from '@vkontakte/vkui';

import { useProductsSearch } from './useProductsSearch';

export const ProductsSearch: FC = () => {
  const { query, handleSearchChange } = useProductsSearch();

  return <Search value={query} onChange={handleSearchChange} />;
};
