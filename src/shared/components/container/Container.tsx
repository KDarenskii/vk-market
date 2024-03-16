import { FC, PropsWithChildren } from 'react';

import styles from './container.module.css';

interface ContainerProps {
  maxWidth?: number;
}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  maxWidth,
}) => {
  return (
    <div className={styles.container} style={{ maxWidth: maxWidth }}>
      {children}
    </div>
  );
};
