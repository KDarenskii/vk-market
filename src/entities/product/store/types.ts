import { Product } from '..';

export interface ProductsState {
  isLoading: boolean;
  error: string | null;
  products: Product[];
  query: string | null;
}
