import React, { memo } from 'react';

import styles from './HeaderStyles';

const Header = ({ children }) => {
  return <header className={styles.header}>{children}</header>;
};

export default memo(Header);
