import { ProductsState } from './types';

export const defaultProductsState: ProductsState = {
  error: null,
  isLoading: false,
  products: [],
  query: null,
};
