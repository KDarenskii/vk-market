import { FC } from 'react';

import cn from 'clsx';

import { IconButton } from '@vkontakte/vkui';

import { Icon24AddOutline, Icon24MinusOutline } from '@vkontakte/icons';

import styles from './cartProductCounter.module.css';

interface CartProductCounterProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const CartProductCounter: FC<CartProductCounterProps> = ({
  count,
  onDecrease,
  onIncrease,
}) => {
  return (
    <div className={styles.counterWrapper}>
      <IconButton
        label="Убрать"
        onClick={onDecrease}
        borderRadiusMode="inherit"
        className={cn(styles.counterButton, styles.disabled)}
      >
        <Icon24MinusOutline />
      </IconButton>
      <div className={styles.counterNumber}>{count}</div>
      <IconButton
        borderRadiusMode="inherit"
        label="Добавить"
        onClick={onIncrease}
        disabled={false}
        className={cn(styles.counterButton, false && styles.disabled)}
      >
        <Icon24AddOutline />
      </IconButton>
    </div>
  );
};
