import { FC } from 'react';

import { ProductCartButton } from 'features/product';

import { Product } from 'entities/product';

import { Div } from '@vkontakte/vkui';

import { ProductCard } from '../productCard/ProductCard';

import styles from './productList.module.css';

interface ProductsListProps {
  products: Product[];
}

export const ProductsList: FC<ProductsListProps> = ({ products }) => {
  return (
    <Div>
      <div className={styles.productsWrapper}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            actions={<ProductCartButton product={product} />}
          />
        ))}
      </div>
    </Div>
  );
};
