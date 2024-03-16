import { FC } from 'react';

import { Product } from 'entities/product';

import { Button } from '@vkontakte/vkui';

import { Icon20ShoppingCartOutline } from '@vkontakte/icons';

import { useProductCartButton } from './useProductCartButton';

interface ProductCartButtonProps {
  product: Product;
}

export const ProductCartButton: FC<ProductCartButtonProps> = ({ product }) => {
  const { handleProductCartButtonClick, isProductInCart } =
    useProductCartButton(product);

  return (
    <Button
      mode="primary"
      appearance={isProductInCart ? 'positive' : 'accent'}
      onClick={handleProductCartButtonClick}
      after={<Icon20ShoppingCartOutline />}
      stretched
    >
      {isProductInCart ? 'В корзине' : 'В корзину'}
    </Button>
  );
};
