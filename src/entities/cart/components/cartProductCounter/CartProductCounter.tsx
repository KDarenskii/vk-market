import { FC } from 'react';

import cn from 'clsx';

import { IconButton } from '@vkontakte/vkui';

import { Icon20Add, Icon20MinusOutline } from '@vkontakte/icons';

import styles from './cartProductCounter.module.css';

interface CartProductCounterProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  isIncreaseDisabled?: boolean;
  isDecreaseDisabled?: boolean;
}

export const CartProductCounter: FC<CartProductCounterProps> = ({
  count,
  onDecrease,
  onIncrease,
  isDecreaseDisabled,
  isIncreaseDisabled,
}) => {
  return (
    <div className={styles.counterWrapper}>
      <IconButton
        label="Убрать"
        onClick={onDecrease}
        borderRadiusMode="inherit"
        disabled={isDecreaseDisabled}
        className={cn(
          styles.counterButton,
          isDecreaseDisabled && styles.disabled
        )}
      >
        <Icon20MinusOutline />
      </IconButton>
      <div className={styles.counterNumber}>{count}</div>
      <IconButton
        borderRadiusMode="inherit"
        label="Добавить"
        onClick={onIncrease}
        disabled={isIncreaseDisabled}
        className={cn(
          styles.counterButton,
          isIncreaseDisabled && styles.disabled
        )}
      >
        <Icon20Add />
      </IconButton>
    </div>
  );
};
