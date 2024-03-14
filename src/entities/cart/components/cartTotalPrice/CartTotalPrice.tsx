import { FC } from 'react';

import { formatCurrency } from 'shared/helpers';

import { Div, Title } from '@vkontakte/vkui';

import styles from './cartTotalPrice.module.css';

interface CartTotalPriceProps {
  price: number;
}

export const CartTotalPrice: FC<CartTotalPriceProps> = ({ price }) => {
  return (
    <Div>
      <Title className={styles.priceText}>
        Итоговая цена корзины: {formatCurrency(price)}
      </Title>
    </Div>
  );
};
