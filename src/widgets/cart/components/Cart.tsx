import { FC } from 'react';

import { CartHeader, CartTotalPrice } from 'features/cart';

import { CartEmptyPlaceholder, CartItem, selectCart } from 'entities/cart';

import { ErrorPlaceholder } from 'shared/components';
import { useAppSelector } from 'shared/hooks';

import { Div, Group, PanelSpinner, Separator, Spacing } from '@vkontakte/vkui';

import { CartList } from './CartList';

export const Cart: FC = () => {
  const { isLoading, cartItems, error } = useAppSelector(selectCart);

  return (
    <Div>
      <Group>
        <CartHeader />
        <Spacing size={16} />
        <Separator />
        <Spacing size={16} />
        <Loader isLoading={isLoading} />
        <Error isError={!!error} />
        <EmptyStateMessage
          isError={!!error}
          isLoading={isLoading}
          cartItemsLength={cartItems.length}
        />
        <CartContent
          cartItems={cartItems}
          isError={!!error}
          isLoading={isLoading}
        />
      </Group>
    </Div>
  );
};

function CartContent({
  isError,
  isLoading,
  cartItems,
}: {
  isError: boolean;
  isLoading: boolean;
  cartItems: CartItem[];
}) {
  if (isError || isLoading || cartItems.length === 0) {
    return null;
  }
  return (
    <>
      <CartList cartItems={cartItems} />
      <Spacing size={16} />
      <Separator />
      <CartTotalPrice />
    </>
  );
}

function Error({ isError }: { isError: boolean }) {
  if (!isError) return null;
  return <ErrorPlaceholder />;
}

function Loader({ isLoading }: { isLoading: boolean }) {
  if (!isLoading) return null;
  return <PanelSpinner>Список товаров загружается</PanelSpinner>;
}

function EmptyStateMessage({
  isError,
  isLoading,
  cartItemsLength,
}: {
  isError: boolean;
  isLoading: boolean;
  cartItemsLength: number;
}) {
  if (isError || isLoading || cartItemsLength > 0) {
    return null;
  }
  return <CartEmptyPlaceholder />;
}
