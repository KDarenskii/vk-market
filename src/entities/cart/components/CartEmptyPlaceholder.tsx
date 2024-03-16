import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { routes } from 'shared/constants';

import { Link, Placeholder } from '@vkontakte/vkui';

import { Icon28ShoppingCartOutline } from '@vkontakte/icons';

export const CartEmptyPlaceholder: FC = () => {
  const navigate = useNavigate();

  return (
    <Placeholder
      icon={<Icon28ShoppingCartOutline />}
      header="Ваша корзина пуста"
      action={
        <Link onClick={() => navigate(routes.products.path)}>Каталог</Link>
      }
    >
      Перейдите в каталог товаров для покупок
    </Placeholder>
  );
};
