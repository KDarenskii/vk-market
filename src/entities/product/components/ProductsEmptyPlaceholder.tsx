import { FC } from 'react';

import { Placeholder } from '@vkontakte/vkui';

import { Icon28CubeBoxOutline } from '@vkontakte/icons';

export const ProductsEmptyPlaceholder: FC = () => {
  return (
    <Placeholder icon={<Icon28CubeBoxOutline />} header="Товары не найдены">
      По вашему запросу ничего не найдено
    </Placeholder>
  );
};
