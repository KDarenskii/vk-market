import { FC } from 'react';

import { Cart } from 'widgets/cart';

import { Panel, View } from '@vkontakte/vkui';

import { PageHeader } from './layout/PageHeader';

export const CartPage: FC = () => {
  return (
    <View activePanel="cart">
      <Panel id="cart">
        <PageHeader />
        <Cart />
      </Panel>
    </View>
  );
};
