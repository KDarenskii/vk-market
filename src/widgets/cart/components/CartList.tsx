import { FC } from 'react';

import { CartItem as ICartItem } from 'entities/cart';

import { CartItem } from './CartItem';

interface CartListProps {
  cartItems: ICartItem[];
}

export const CartList: FC<CartListProps> = ({ cartItems }) => {
  return (
    <>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </>
  );
};
