import { Product } from 'entities/product';

export interface CartItem {
  id: number;
  product: Product;
  amount: number;
}
