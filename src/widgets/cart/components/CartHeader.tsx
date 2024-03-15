import { FC } from 'react';

import { Counter, Header } from '@vkontakte/vkui';

interface CartHeaderProps {
  cartItemsAmount: number;
}

export const CartHeader: FC<CartHeaderProps> = ({ cartItemsAmount }) => {
  return (
    <Header
      mode="primary"
      size="large"
      indicator={
        !!cartItemsAmount && (
          <Counter size="m" mode="secondary">
            3
          </Counter>
        )
      }
    >
      Корзина товаров
    </Header>
  );
};
