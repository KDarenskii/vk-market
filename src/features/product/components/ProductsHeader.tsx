import { FC } from 'react';

import { selectSearchProducts } from 'entities/product';

import { useAppSelector } from 'shared/hooks';

import { Counter, Header } from '@vkontakte/vkui';

export const ProductsHeader: FC = () => {
  const products = useAppSelector(selectSearchProducts);

  return (
    <Header
      mode="primary"
      size="large"
      indicator={
        <Counter size="m" mode="secondary">
          {products.length}
        </Counter>
      }
    >
      Каталог товаров:
    </Header>
  );
};
