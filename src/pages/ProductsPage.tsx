import { FC } from 'react';

import { Panel, View } from '@vkontakte/vkui';

import { PageHeader } from './layout/PageHeader';

export const ProductsPage: FC = () => {
  return (
    <View activePanel="products">
      <Panel id="products">
        <PageHeader />
      </Panel>
    </View>
  );
};
