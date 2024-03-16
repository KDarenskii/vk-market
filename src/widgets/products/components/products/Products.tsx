import { FC, useEffect } from 'react';

import { ProductsHeader } from 'features/product';

import {
  ProductsEmptyPlaceholder,
  fetchProducts,
  selectProductsState,
} from 'entities/product';

import { Container } from 'shared/components';
import { useAppDispatch, useAppSelector } from 'shared/hooks';

import {
  Group,
  PanelSpinner,
  Separator,
  Spacing,
  SplitCol,
} from '@vkontakte/vkui';

import { ProductsList } from '../productsList';

import styles from './products.module.css';

export const Products: FC = () => {
  const dispatch = useAppDispatch();

  const { isLoading, products } = useAppSelector(selectProductsState);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container>
      <SplitCol
        width="100%"
        stretchedOnMobile
        className={styles.productsWrapper}
      >
        <Group>
          <ProductsHeader />
          <Spacing size={16} />
          <Separator />
          <Spacing size={16} />
          {isLoading && <PanelSpinner>Список товаров загружается</PanelSpinner>}
          {!isLoading && products.length === 0 && <ProductsEmptyPlaceholder />}
          {!isLoading && products.length > 0 && (
            <>
              <ProductsList products={products} />
            </>
          )}
        </Group>
      </SplitCol>
    </Container>
  );
};
