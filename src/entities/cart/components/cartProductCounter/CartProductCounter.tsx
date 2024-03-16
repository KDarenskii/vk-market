import { FC } from 'react';

import { IconButton, classNames } from '@vkontakte/vkui';

import {
  Icon20Add,
  Icon20MinusOutline,
  Icon24AddOutline,
  Icon24MinusOutline,
} from '@vkontakte/icons';

import styles from './cartProductCounter.module.css';

interface CartProductCounterProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  size?: 'm' | 's';
  isIncreaseDisabled?: boolean;
  isDecreaseDisabled?: boolean;
  className?: string;
}

export const CartProductCounter: FC<CartProductCounterProps> = ({
  count,
  onDecrease,
  onIncrease,
  isDecreaseDisabled,
  isIncreaseDisabled,
  size = 'm',
  className,
}) => {
  const wrapperClassNames = classNames(
    styles.counterWrapper,
    size === 's' && styles.small,
    className
  );

  const buttonBaseClassNames = classNames(
    styles.counterButton,
    size === 's' && styles.small
  );

  const increaseButtonClassNames = classNames(
    buttonBaseClassNames,
    isIncreaseDisabled && styles.disabled
  );

  const decreaseButtonClassNames = classNames(
    buttonBaseClassNames,
    isDecreaseDisabled && styles.disabled
  );

  return (
    <div className={wrapperClassNames}>
      <IconButton
        label="Убрать"
        onClick={onDecrease}
        borderRadiusMode="inherit"
        disabled={isDecreaseDisabled}
        className={decreaseButtonClassNames}
      >
        {size === 's' ? <Icon20MinusOutline /> : <Icon24MinusOutline />}
      </IconButton>
      <div className={styles.counterNumber}>{count}</div>
      <IconButton
        borderRadiusMode="inherit"
        label="Добавить"
        onClick={onIncrease}
        disabled={isIncreaseDisabled}
        className={increaseButtonClassNames}
      >
        {size === 's' ? <Icon20Add /> : <Icon24AddOutline />}
      </IconButton>
    </div>
  );
};
