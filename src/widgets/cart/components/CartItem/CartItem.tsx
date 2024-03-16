import { FC } from 'react';

import {
  CartItemAmount,
  CartItemDeleteButton,
  CartItemPrice,
} from 'features/cart';

import { CartProductInfo, CartItem as ICartItem } from 'entities/cart';

import {
  Cell,
  Group,
  Image,
  useAdaptivityConditionalRender,
} from '@vkontakte/vkui';

import styles from './cartItem.module.css';

interface CartItemProps {
  cartItem: ICartItem;
}

export const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { viewWidth } = useAdaptivityConditionalRender();

  const { product, id } = cartItem;

  return (
    <Group className={styles.cartItemWrapper} mode="plain">
      <Cell
        className={styles.cartProduct}
        after={
          viewWidth.tabletPlus && (
            <CartItemAmount
              className={viewWidth.tabletPlus.className}
              cartItemId={id}
            />
          )
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
        <div className={styles.cartItemActions}>
          <CartItemDeleteButton cartItemId={cartItem.id} />
          {viewWidth.tabletMinus && (
            <CartItemAmount
              className={viewWidth.tabletMinus.className}
              cartItemId={id}
              size="s"
            />
          )}
        </div>
      </Cell>
      <CartItemPrice cartItemId={id} />
    </Group>
  );
};
