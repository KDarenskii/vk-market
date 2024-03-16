import { RootState } from 'store';

export const selectCartProduct = (state: RootState, productId: number) => {
  return state.cart.cartItems.find(
    (cartItem) => cartItem.product.id === productId
  );
};
