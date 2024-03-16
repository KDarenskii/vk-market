import { useNavigate } from 'react-router-dom';

import { addCartItem, selectCartProduct } from 'entities/cart';
import { Product } from 'entities/product';

import { routes } from 'shared/constants';
import { useAppDispatch, useAppSelector } from 'shared/hooks';

export const useProductCartButton = (product: Product) => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const isProductInCart = !!useAppSelector((state) =>
    selectCartProduct(state, product.id)
  );

  const handleProductCartButtonClick = () => {
    if (isProductInCart) {
      navigate(routes.cart.path);
    } else {
      dispatch(addCartItem(product));
    }
  };

  return { isProductInCart, handleProductCartButtonClick };
};
