import { useEffect, useState } from 'react';

import {
  decreaseCartItemAmount,
  increaseCartItemAmount,
  selectCartItem,
} from 'entities/cart';

import { useAppDispatch, useAppSelector } from 'shared/hooks';

import {
  MAX_CART_ITEM_AMOUNT,
  MIN_CART_ITEM_AMOUNT,
} from '../../constants/cartItemAmount';

export const useCartItemAmount = (cartItemId: number) => {
  const dispatch = useAppDispatch();

  const cartItem = useAppSelector((state) => selectCartItem(state, cartItemId));

  const [isIncreaseDisabled, setIsIncreaseDisabled] = useState(
    cartItem ? cartItem.amount === MAX_CART_ITEM_AMOUNT : false
  );
  const [isDecreaseDisabled, setIsDecreaseDisabled] = useState(
    cartItem ? cartItem.amount === MIN_CART_ITEM_AMOUNT : false
  );

  useEffect(() => {
    if (!cartItem) return;
    setIsIncreaseDisabled(cartItem.amount === MAX_CART_ITEM_AMOUNT);
    setIsDecreaseDisabled(cartItem.amount === MIN_CART_ITEM_AMOUNT);
  }, [cartItem]);

  const addCartItem = async () => {
    if (!cartItem) return;

    if (cartItem.amount < MAX_CART_ITEM_AMOUNT) {
      dispatch(increaseCartItemAmount(cartItemId));
    }
  };

  const removeCartItem = async () => {
    if (!cartItem) return;

    if (cartItem.amount > MIN_CART_ITEM_AMOUNT) {
      dispatch(decreaseCartItemAmount(cartItemId));
    }
  };

  return {
    addCartItem,
    removeCartItem,
    isIncreaseDisabled,
    isDecreaseDisabled,
    amount: cartItem?.amount,
  };
};
