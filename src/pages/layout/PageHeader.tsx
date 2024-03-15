import { FC } from 'react';

import { useLocation, useNavigate } from 'react-router';

import { routes } from 'shared/constants';

import {
  IconButton,
  PanelHeader,
  PanelHeaderBack,
  usePlatform,
} from '@vkontakte/vkui';

import { Icon28ShoppingCartOutline } from '@vkontakte/icons';

export const PageHeader: FC = () => {
  const platform = usePlatform();

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const isCartPage = pathname.includes(routes.cart.path);

  return (
    <PanelHeader
      after={
        <IconButton
          onClick={() => navigate(routes.cart.path)}
          aria-label="Корзина"
        >
          <Icon28ShoppingCartOutline />
        </IconButton>
      }
      before={
        isCartPage && (
          <PanelHeaderBack
            onClick={() => navigate(routes.products.path)}
            label={platform === 'vkcom' ? 'Назад' : undefined}
          />
        )
      }
    >
      VK Market
    </PanelHeader>
  );
};
