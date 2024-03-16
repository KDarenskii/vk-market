import { FC } from 'react';

import { CartProductCounter } from 'entities/cart';

import { useCartItemAmount } from './useCartItemAmount';

interface CartItemAmountProps {
  cartItemId: number;
  size?: 'm' | 's';
  className?: string;
}

export const CartItemAmount: FC<CartItemAmountProps> = ({
  cartItemId,
  size = 'm',
  className,
}) => {
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
      className={className}
      count={amount}
      onDecrease={removeCartItem}
      onIncrease={addCartItem}
      isDecreaseDisabled={isDecreaseDisabled}
      isIncreaseDisabled={isIncreaseDisabled}
      size={size}
    />
  );
};
