import React from 'react';

import styles from './IconStyles';

const Icon = ({ svg: Svg, size = 25, ...otherProps }) => (
  <div className={styles.icon} {...otherProps}>
    <Svg width={size} height={size} />
  </div>
);

export default Icon;
