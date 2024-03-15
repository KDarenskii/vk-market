import { FC } from 'react';

import { Link, Placeholder } from '@vkontakte/vkui';

import { Icon28ShoppingCartOutline } from '@vkontakte/icons';

export const CartEmptyPlaceholder: FC = () => {
  return (
    <Placeholder
      icon={<Icon28ShoppingCartOutline />}
      header="Ваша корзина пуста"
      action={<Link>Каталог</Link>}
    >
      Перейдите в каталог товаров для покупок
    </Placeholder>
  );
};
