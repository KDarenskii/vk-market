import { FC } from 'react';

import { Cart } from 'widgets/cart';

import { Panel, PanelHeader, View } from '@vkontakte/vkui';

export const CartPage: FC = () => {
  return (
    <View activePanel="cart">
      <Panel id="cart">
        <PanelHeader>VK Market</PanelHeader>
        <Cart />
      </Panel>
    </View>
  );
};
