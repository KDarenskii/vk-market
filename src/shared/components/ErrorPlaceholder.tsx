import { FC } from 'react';

import { Placeholder } from '@vkontakte/vkui';

import { Icon28ErrorCircleOutline } from '@vkontakte/icons';

export const ErrorPlaceholder: FC = () => {
  return (
    <Placeholder icon={<Icon28ErrorCircleOutline />} header="Произошла ошибка">
      Пожалуйста, попробуйте еще раз
    </Placeholder>
  );
};
