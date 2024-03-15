import { FC, useEffect } from 'react';

import { CartHeader, CartTotalPrice } from 'features/cart';

import { fetchCartItems, selectCart } from 'entities/cart';

import { useAppDispatch, useAppSelector } from 'shared/hooks';

import { Div, Group, PanelSpinner, Separator, Spacing } from '@vkontakte/vkui';

import { CartList } from './CartList';

export const Cart: FC = () => {
  const dispatch = useAppDispatch();

  const { isLoading, cartItems } = useAppSelector(selectCart);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  return (
    <Div>
      <Group>
        <CartHeader />
        <Spacing size={16} />
        <Separator />
        <Spacing size={16} />
        {isLoading && <PanelSpinner>Список товаров загружается</PanelSpinner>}
        {!isLoading && cartItems.length > 0 && (
          <>
            <CartList cartItems={cartItems} />
            <Spacing size={16} />
            <Separator />
            <CartTotalPrice />
          </>
        )}
      </Group>
    </Div>
  );
};
