import { CartItem } from '..';

export interface CartState {
  isLoading: boolean;
  error: string | null;
  cartItems: CartItem[];
}
