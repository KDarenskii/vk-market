import { FC } from 'react';

import {
  CartProductCounter,
  CartProductInfo,
  CartProductSummary,
} from 'entities/cart';
import { Product } from 'entities/product';

import { Cell, Group, Image } from '@vkontakte/vkui';

import styles from './cartProduct.module.css';

interface CartProductProps {
  product: Product;
}

export const CartProduct: FC<CartProductProps> = ({ product }) => {
  return (
    <Group className={styles.cartItemWrapper} mode="plain">
      <Cell
        className={styles.cartProduct}
        after={
          <CartProductCounter
            count={5}
            onDecrease={() => {}}
            onIncrease={() => {}}
          />
        }
        before={
          <Image
            size={110}
            src={product.imageUrl}
            className={styles.productImageWrapper}
          />
        }
      >
        <CartProductInfo
          category={'одежда'}
          description={product.description}
          price={product.price}
          title={product.title}
        />
      </Cell>
      <CartProductSummary price={596} />
    </Group>
  );
};
