import React from 'react';

import styles from './CardStyles';

const Card = ({ children, ...otherProps }) => {
  if (children && typeof children === 'function') {
    return children({ cardStyle: styles.card });
  }
  return (
    <div className={styles.card} {...otherProps}>
      {children}
    </div>
  );
};

export default Card;
