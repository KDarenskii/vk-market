import { RootState } from 'store';

export const selectCartItem = (state: RootState, itemId: number) =>
  state.cart.cartItems.find((cartItem) => cartItem.id === itemId);
