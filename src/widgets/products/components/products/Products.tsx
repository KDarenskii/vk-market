import { FC } from 'react';

import { ProductsHeader, ProductsSearch } from 'features/product';

import {
  Product,
  ProductsEmptyPlaceholder,
  selectProductsState,
  selectSearchProducts,
} from 'entities/product';

import { Container, ErrorPlaceholder } from 'shared/components';
import { useAppSelector } from 'shared/hooks';

import {
  Div,
  Group,
  PanelSpinner,
  Separator,
  Spacing,
  SplitCol,
} from '@vkontakte/vkui';

import { ProductsList } from '../productsList';

import { useProducts } from './useProducts';

import styles from './products.module.css';

export const Products: FC = () => {
  const products = useAppSelector(selectSearchProducts);
  const { isLoading, error } = useAppSelector(selectProductsState);

  useProducts();

  return (
    <Container>
      <SplitCol
        width="100%"
        stretchedOnMobile
        className={styles.productsWrapper}
      >
        <Div>
          <Group>
            <ProductsHeader />
            <Spacing size={16} />
            <Separator />
            <Spacing size={16} />
            <ProductsSearch />
            <Loader isLoading={isLoading} />
            <Error isError={!!error} />
            <EmptyStateMessage
              isError={!!error}
              isLoading={isLoading}
              productsLength={products.length}
            />
            <ProductsContent
              products={products}
              isError={!!error}
              isLoading={isLoading}
            />
          </Group>
        </Div>
      </SplitCol>
    </Container>
  );
};

function ProductsContent({
  isError,
  isLoading,
  products,
}: {
  isError: boolean;
  isLoading: boolean;
  products: Product[];
}) {
  if (isError || isLoading || products.length === 0) {
    return null;
  }
  return <ProductsList products={products} />;
}

function Error({ isError }: { isError: boolean }) {
  if (!isError) return null;
  return <ErrorPlaceholder />;
}

function Loader({ isLoading }: { isLoading: boolean }) {
  if (!isLoading) return null;
  return <PanelSpinner>Список товаров загружается</PanelSpinner>;
}

function EmptyStateMessage({
  isError,
  isLoading,
  productsLength,
}: {
  isError: boolean;
  isLoading: boolean;
  productsLength: number;
}) {
  if (isError || isLoading || productsLength > 0) {
    return null;
  }
  return <ProductsEmptyPlaceholder />;
}
