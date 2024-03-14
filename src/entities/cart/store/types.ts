import { Product } from 'entities/product';

export interface CartState {
  isLoading: boolean;
  error: string | null;
  products: Product[];
}
