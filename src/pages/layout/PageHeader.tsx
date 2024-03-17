import { FC } from 'react';

import { useLocation, useNavigate } from 'react-router';

import { CartButton, ThemeButton } from 'shared/components';
import { routes } from 'shared/constants';

import { PanelHeader, PanelHeaderBack, usePlatform } from '@vkontakte/vkui';

export const PageHeader: FC = () => {
  const platform = usePlatform();

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const isCartPage = pathname.includes(routes.cart.path);

  return (
    <PanelHeader
      before={
        isCartPage && (
          <PanelHeaderBack
            onClick={() => navigate(routes.products.path)}
            label={platform === 'vkcom' ? 'Назад' : undefined}
          />
        )
      }
      after={
        <>
          <ThemeButton />
          <CartButton />
        </>
      }
    >
      VK Market
    </PanelHeader>
  );
};
