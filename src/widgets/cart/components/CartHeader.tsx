import { FC } from 'react';

import { Counter, Header } from '@vkontakte/vkui';

export const CartHeader: FC = () => {
  return (
    <Header
      mode="primary"
      size="large"
      indicator={
        <Counter size="m" mode="secondary">
          3
        </Counter>
      }
    >
      Корзина товаров
    </Header>
  );
};
