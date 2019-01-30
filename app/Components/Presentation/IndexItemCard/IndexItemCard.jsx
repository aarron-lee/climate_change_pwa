import React from 'react';

import Card from 'PresentationalComponents/Card/Card';

import Icon from 'PresentationalComponents/Icon/Icon';
import NextArrowIcon from 'Images/next_arrow';

import styles from './IndexCardStyles';

export const RightArrowIcon = props => <Icon svg={NextArrowIcon} size={12} {...props} />;

const IndexItemCard = ({ children, ...otherProps }) => {
  return (
    <Card>
      {({ cardStyle }) => {
        if (children && typeof children === 'function') {
          return children({
            indexItemCardStyle: `${cardStyle} ${styles.indexItem}`,
            RightArrowIcon
          });
        } else {
          return (
            <div className={`${cardStyle} ${styles.indexItem}`} {...otherProps}>
              {children} <RightArrowIcon />
            </div>
          );
        }
      }}
    </Card>
  );
};

export default IndexItemCard;
