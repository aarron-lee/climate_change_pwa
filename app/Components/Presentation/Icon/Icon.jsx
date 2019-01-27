import React from 'react';

import styles from './IconStyles';

const Icon = ({ svg: Svg, size = 25, ...otherProps }) => (
  <Svg className={styles.icon} width={size} height={size} {...otherProps} />
);

export default Icon;
