import { FC } from 'react';

import { Counter, Header } from '@vkontakte/vkui';

export const ProductsHeader: FC = () => {

  return (
    <Header
      mode="primary"
      size="large"
      indicator={
        <Counter size="m" mode="secondary">
          {10}
        </Counter>
      }
    >
      Каталог товаров:
    </Header>
  );
};
