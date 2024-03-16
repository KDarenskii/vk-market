import { FC } from 'react';

import { CartHeader, CartTotalPrice } from 'features/cart';

import { CartEmptyPlaceholder, selectCart } from 'entities/cart';

import { useAppSelector } from 'shared/hooks';

import { Div, Group, PanelSpinner, Separator, Spacing } from '@vkontakte/vkui';

import { CartList } from './CartList';

export const Cart: FC = () => {
  const { isLoading, cartItems } = useAppSelector(selectCart);

  return (
    <Div>
      <Group>
        <CartHeader />
        <Spacing size={16} />
        <Separator />
        <Spacing size={16} />
        {isLoading && <PanelSpinner>Список товаров загружается</PanelSpinner>}
        {!isLoading && cartItems.length === 0 && <CartEmptyPlaceholder />}
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
