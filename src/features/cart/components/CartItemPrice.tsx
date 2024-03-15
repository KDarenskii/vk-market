import { FC } from 'react';

import { CartProductSummary, selectCartItem } from 'entities/cart';

import { useAppSelector } from 'shared/hooks';

interface CartItemPriceProps {
  cartItemId: number;
}

export const CartItemPrice: FC<CartItemPriceProps> = ({ cartItemId }) => {
  const cartItem = useAppSelector((state) => selectCartItem(state, cartItemId));

  if (!cartItem) return null;

  const cartItemPrice = cartItem.amount * cartItem.product.price;

  return <CartProductSummary price={cartItemPrice} />;
};
