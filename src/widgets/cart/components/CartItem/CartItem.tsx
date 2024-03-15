import { FC } from 'react';

import { CartItemAmount, CartItemPrice } from 'features/cart';

import { CartProductInfo, CartItem as ICartItem } from 'entities/cart';

import { Cell, Group, Image } from '@vkontakte/vkui';

import styles from './cartItem.module.css';

interface CartItemProps {
  cartItem: ICartItem;
}

export const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { product, id } = cartItem;

  return (
    <Group className={styles.cartItemWrapper} mode="plain">
      <Cell
        className={styles.cartProduct}
        after={<CartItemAmount cartItemId={id} />}
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
      <CartItemPrice cartItemId={id} />
    </Group>
  );
};
