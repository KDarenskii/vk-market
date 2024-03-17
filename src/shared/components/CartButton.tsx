import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { routes } from 'shared/constants';
import { useTheme } from 'shared/hooks';

import { IconButton } from '@vkontakte/vkui';

import { Icon28ShoppingCartOutline } from '@vkontakte/icons';

export const CartButton: FC = () => {
  const navigate = useNavigate();

  const theme = useTheme();

  return (
    <IconButton onClick={() => navigate(routes.cart.path)} aria-label="Корзина">
      <Icon28ShoppingCartOutline color={theme === 'dark' ? '#fff' : '#000'} />
    </IconButton>
  );
};
