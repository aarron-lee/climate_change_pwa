import React from 'react';

import styles from './ButtonStyles';

export const BUTTON_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  XLARGE: 'xlarge'
};

const Button = ({ children, size = BUTTON_SIZES.MEDIUM, ...props }) => {
  let buttonStyle = `${styles.button} ${styles[size]}`;

  if (children && typeof children === 'function') {
    return children({ buttonStyle });
  }

  return (
    <button className={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;
