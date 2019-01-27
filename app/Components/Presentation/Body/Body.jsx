import React from 'react';

import styles from './BodyStyles';

const Body = ({ children }) => <main className={styles.body}>{children}</main>;

export default Body;
