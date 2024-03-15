import { FC } from 'react';

import { IconButton } from '@vkontakte/vkui';

import { Icon24Delete } from '@vkontakte/icons';

import styles from './iconDeleteButton.module.css';

interface IconDeleteButtonProps {
  onClick: () => void;
  isDisabled?: boolean;
}

export const IconDeleteButton: FC<IconDeleteButtonProps> = ({
  onClick,
  isDisabled,
}) => {
  return (
    <IconButton
      className={styles.deleteButton}
      aria-label="Удалить"
      onClick={onClick}
      disabled={isDisabled}
    >
      <Icon24Delete />
    </IconButton>
  );
};
