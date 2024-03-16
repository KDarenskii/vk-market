import { RootState } from 'store';

export const selectProductsQuery = (state: RootState) => state.products.query;
