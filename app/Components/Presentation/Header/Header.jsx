import React, { memo } from 'react';

import styles from './HeaderStyles';

const Header = ({ children }) => {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>{children}</header>
    </div>
  );
};

export default memo(Header);
