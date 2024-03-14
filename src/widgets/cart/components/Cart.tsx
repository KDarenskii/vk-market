import { FC } from 'react';

import { CartTotalPrice } from 'entities/cart';

import { Div, Group, Separator, Spacing } from '@vkontakte/vkui';

import { CartHeader } from './CartHeader';
import { CartList } from './CartList';

export const Cart: FC = () => {
  return (
    <Div>
      <Group>
        <CartHeader />
        <Spacing size={16} />
        <Separator />
        <Spacing size={16} />
        <CartList />
        <Spacing size={16} />
        <Separator />
        <CartTotalPrice price={1596} />
      </Group>
    </Div>
  );
};
