import { FC } from 'react';

import { formatCurrency } from 'shared/helpers';

import { Counter, Headline, Text, Title } from '@vkontakte/vkui';

import styles from './cartProductInfo.module.css';

interface CartProductInfoProps {
  title: string;
  category: string;
  description: string;
  price: number;
}

export const CartProductInfo: FC<CartProductInfoProps> = ({
  category,
  description,
  price,
  title,
}) => {
  return (
    <div className={styles.productInfo}>
      <Counter className={styles.productCategory} size="s" mode="secondary">
        {category}
      </Counter>
      <Title level="3">{title}</Title>
      <Headline>{description}</Headline>
      <Text weight="2" className={styles.productPrice}>
        {formatCurrency(price)}
      </Text>
    </div>
  );
};
