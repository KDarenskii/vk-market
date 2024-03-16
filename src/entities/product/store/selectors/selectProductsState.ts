import { RootState } from 'store';

export const selectProductsState = (state: RootState) => {
  return state.products;
};
