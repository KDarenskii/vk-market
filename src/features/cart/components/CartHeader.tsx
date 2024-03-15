import { FC } from 'react';

import { clearCart, selectCart } from 'entities/cart';

import { useAppDispatch, useAppSelector } from 'shared/hooks';

import { Button, Counter, Header } from '@vkontakte/vkui';

import { Icon20DeleteOutline } from '@vkontakte/icons';

export const CartHeader: FC = () => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector(selectCart);

  return (
    <Header
      mode="primary"
      size="large"
      indicator={
        cartItems.length > 0 && (
          <Counter size="m" mode="secondary">
            {cartItems.length}
          </Counter>
        )
      }
      aside={
        <Button
          appearance="negative"
          mode="primary"
          size="m"
          onClick={() => dispatch(clearCart())}
          after={<Icon20DeleteOutline />}
        >
          Очистить корзину
        </Button>
      }
    >
      Корзина товаров
    </Header>
  );
};
