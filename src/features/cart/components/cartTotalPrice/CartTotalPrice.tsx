import { FC, useMemo } from 'react';

import { selectCart } from 'entities/cart';

import { formatCurrency } from 'shared/helpers';
import { useAppSelector } from 'shared/hooks';

import { Div, Title } from '@vkontakte/vkui';

import styles from './cartTotalPrice.module.css';

export const CartTotalPrice: FC = () => {
  const { cartItems } = useAppSelector(selectCart);

  const cartPrice = useMemo(
    () =>
      cartItems.reduce((price, { amount, product }) => {
        return price + amount * product.price;
      }, 0),
    [cartItems]
  );

  return (
    <Div>
      <Title className={styles.priceText} level='2'>
        Итоговая цена корзины: {formatCurrency(cartPrice)}
      </Title>
    </Div>
  );
};
