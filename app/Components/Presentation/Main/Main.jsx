import React from 'react';

import styles from './MainStyles';

const Main = ({ children }) => (
  <div className={styles.mainContainer}>
    <div className={styles.main}>{children}</div>
  </div>
);

export default Main;
