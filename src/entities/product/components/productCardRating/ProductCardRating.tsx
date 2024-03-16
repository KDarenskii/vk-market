import { FC } from 'react';

import { Icon12Star, Icon16Comment } from '@vkontakte/icons';

import styles from './productCardRating.module.css';

interface ProductCardRatingProps {
  rate: number;
  commentsCount: number;
}

export const ProductCardRating: FC<ProductCardRatingProps> = ({
  commentsCount,
  rate,
}) => {
  return (
    <div className={styles.productRating}>
      <Icon12Star color="rgb(255, 168, 0)" /> {rate}{' '}
      <Icon16Comment
        color="rgb(245 247 249 / 40%)"
        className={styles.commentsIcon}
      />{' '}
      {commentsCount}
    </div>
  );
};
