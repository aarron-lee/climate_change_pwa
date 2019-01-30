import React from 'react';
import { withRouter } from 'react-router-dom';

import Card from 'PresentationalComponents/Card/Card';

const AppContent = props => {
  const {
    match: {
      params: { category }
    }
  } = props;
  return (
    <Card style={{ padding: '16px', marginTop: '25px', width: '100%' }}>
      <h1>{category}</h1>
      <img src="/static/food_chart.png" width="100%" height="auto" style={{ maxWidth: '600px' }} />
    </Card>
  );
};

export default withRouter(AppContent);
