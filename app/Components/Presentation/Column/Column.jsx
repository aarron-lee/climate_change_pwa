import React from 'react';

import styles from './ColumnStyles';

const Column = ({ children, ...otherProps }) => {
  if (children && typeof children === 'function') {
    return children({ columnStyle: styles.column });
  }
  return (
    <div className={styles.column} {...otherProps}>
      {children}
    </div>
  );
};

export default Column;
