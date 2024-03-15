import { FC } from 'react';

import { CartProductCounter } from 'entities/cart';

import { useCartItemAmount } from './useCartItemAmount';

interface CartItemAmountProps {
  cartItemId: number;
}

export const CartItemAmount: FC<CartItemAmountProps> = ({ cartItemId }) => {
  const {
    amount,
    addCartItem,
    removeCartItem,
    isDecreaseDisabled,
    isIncreaseDisabled,
  } = useCartItemAmount(cartItemId);

  if (!amount) return null;

  return (
    <CartProductCounter
      count={amount}
      onDecrease={removeCartItem}
      onIncrease={addCartItem}
      isDecreaseDisabled={isDecreaseDisabled}
      isIncreaseDisabled={isIncreaseDisabled}
    />
  );
};
