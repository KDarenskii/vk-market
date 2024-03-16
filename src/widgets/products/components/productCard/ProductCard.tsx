import { FC, ReactNode } from 'react';

import { Product, ProductCardRating } from 'entities/product';

import { ContentCard, classNames } from '@vkontakte/vkui';

import styles from './productCard.module.css';

interface ProductCardProps {
  product: Product;
  actions?: ReactNode;
}

export const ProductCard: FC<ProductCardProps> = ({ product, actions }) => {
  const { image, description, category, title, rating } = product;

  return (
    <div
      className={classNames(
        styles.productCardWrapper,
        actions && styles.actions
      )}
    >
      <ContentCard
        className={classNames(styles.productCard, actions && styles.actions)}
        subtitle={category}
        text={description}
        alt={description}
        maxHeight={200}
        src={image}
        header={
          <>
            {title}
            <ProductCardRating
              commentsCount={rating.count}
              rate={rating.rate}
            />
          </>
        }
      />
      {actions && (
        <div className={styles.productCardActionsWrapper}>{actions}</div>
      )}
    </div>
  );
};
