import { FC } from 'react';

import { removeCartItem } from 'entities/cart';

import { IconDeleteButton } from 'shared/components';
import { useAppDispatch } from 'shared/hooks';

interface CartDeleteButtonProps {
  cartItemId: number;
}

export const CartItemDeleteButton: FC<CartDeleteButtonProps> = ({
  cartItemId,
}) => {
  const dispatch = useAppDispatch();

  return (
    <IconDeleteButton onClick={() => dispatch(removeCartItem(cartItemId))} />
  );
};
