import React from 'react';

import styles from './RowStyles';

const Row = ({ children, ...otherProps }) => {
  if (children && typeof children === 'function') {
    return children({ rowStyle: styles.row });
  }
  return (
    <div className={styles.row} {...otherProps}>
      {children}
    </div>
  );
};

export default Row;
