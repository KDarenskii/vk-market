import { createSelector } from '@reduxjs/toolkit';

import { selectProducts } from './selectProducts';
import { selectProductsQuery } from './selectProductsQuery';

export const selectSearchProducts = createSelector(
  [selectProductsQuery, selectProducts],
  (query, products) => {
    if (!query) return products;

    const searchedProducts = products.filter(
      ({ title, description, category }) =>
        [title, description, category].some((value) =>
          value.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        )
    );

    return searchedProducts;
  }
);
