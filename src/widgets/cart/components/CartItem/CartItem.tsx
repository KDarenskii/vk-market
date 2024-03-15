import { FC } from 'react';

import {
  CartProductCounter,
  CartProductInfo,
  CartProductSummary,
  CartItem as ICartItem,
} from 'entities/cart';

import { Cell, Group, Image } from '@vkontakte/vkui';

import styles from './cartItem.module.css';

interface CartItemProps {
  cartItem: ICartItem;
}

export const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { product } = cartItem;

  return (
    <Group className={styles.cartItemWrapper} mode="plain">
      <Cell
        className={styles.cartProduct}
        after={
          <CartProductCounter
            count={cartItem.amount}
            onDecrease={() => {}}
            onIncrease={() => {}}
          />
        }
        before={
          <Image
            size={110}
            src={product.image}
            className={styles.productImageWrapper}
          />
        }
      >
        <CartProductInfo
          category={product.category}
          description={product.description}
          price={product.price}
          title={product.title}
        />
      </Cell>
      <CartProductSummary price={product.price} />
    </Group>
  );
};
