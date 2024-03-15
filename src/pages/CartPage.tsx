import { FC } from 'react';

import { Cart } from 'widgets/cart';

import { IconButton, Panel, PanelHeader, View } from '@vkontakte/vkui';

import { Icon28ShoppingCartOutline } from '@vkontakte/icons';

export const CartPage: FC = () => {
  return (
    <View activePanel="cart">
      <Panel id="cart">
        <PanelHeader
          after={
            <IconButton onClick={() => {}} aria-label="Корзина">
              <Icon28ShoppingCartOutline />
            </IconButton>
          }
        >
          VK Market
        </PanelHeader>
        <Cart />
      </Panel>
    </View>
  );
};
