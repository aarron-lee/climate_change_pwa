import React, { Fragment } from 'react';
import inflection from 'inflection';
import { Link, withRouter } from 'react-router-dom';

import Card from 'PresentationalComponents/Card/Card';
import CategoryContent from './CategoryContent/CategoryContent';

const linkStyle = { textDecoration: 'none', color: 'blue' };

const AppContent = ({ isMobile, ...props }) => {
  let category = '';
  if (props.category) {
    category = props.category;
  } else {
    category = props.match.params.category;
  }
  return (
    <Fragment>
      {isMobile && (
        <Link to={'/'} style={linkStyle}>
          &#60; Back
        </Link>
      )}
      <Card style={{ padding: '0px 16px', marginTop: '25px', width: '100%' }}>
        <h1>{inflection.titleize(category)}</h1>
        <CategoryContent category={category} />
      </Card>
    </Fragment>
  );
};

export default withRouter(AppContent);
