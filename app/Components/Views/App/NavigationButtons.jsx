import React, { Fragment } from 'react';
import inflection from 'inflection';
import { Link } from 'react-router-dom';

import { CATEGORIES } from './CategoryContent/CategoryContent';
import IndexItemCard from 'PresentationalComponents/IndexItemCard/IndexItemCard';

import withIsMobile from 'UtilComponents/withIsMobile';

const IndexItem = ({ children, url, isMobile }) => {
  let indexItemStyle = {};
  if (isMobile) {
    indexItemStyle.width = '100%';
  }
  return (
    <Link to={url} style={{ textDecoration: 'none', color: 'black' }}>
      <IndexItemCard style={indexItemStyle}>{children}</IndexItemCard>
    </Link>
  );
};

const NavigationButtons = ({ isMobile }) => (
  <Fragment>
    {Object.values(CATEGORIES).map((category, idx) => {
      return (
        <IndexItem url={`/${category}`} key={idx} isMobile={isMobile}>
          {inflection.titleize(category)}
        </IndexItem>
      );
    })}
  </Fragment>
);

export default withIsMobile(NavigationButtons);
