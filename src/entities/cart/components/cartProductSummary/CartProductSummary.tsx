import { FC } from 'react';

import { formatCurrency } from 'shared/helpers';

import { Title } from '@vkontakte/vkui';

import styles from './cartProductSummary.module.css';

interface CartProductSummaryProps {
  price: number;
}

export const CartProductSummary: FC<CartProductSummaryProps> = ({ price }) => {
  return (
    <div className={styles.productSummary}>
      <Title weight="1" level="2">
        Итого: <span className={styles.price}>{formatCurrency(price)}</span>
      </Title>
    </div>
  );
};
