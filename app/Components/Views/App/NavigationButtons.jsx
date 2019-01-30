import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

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
    <IndexItem url="/" isMobile={isMobile}>
      Home
    </IndexItem>
    <IndexItem url="/food" isMobile={isMobile}>
      Food
    </IndexItem>
    <IndexItem url="/transport" isMobile={isMobile}>
      Transport
    </IndexItem>
    <IndexItem url="/energy" isMobile={isMobile}>
      Energy
    </IndexItem>
  </Fragment>
);

export default withIsMobile(NavigationButtons);
