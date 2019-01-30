import React from 'react';
import inflection from 'inflection';
import { withRouter } from 'react-router-dom';

import Card from 'PresentationalComponents/Card/Card';

const AppContent = ({ isMobile, landing, ...props }) => {
  if (landing) {
    // landing page isntead
    return (
      <Card style={{ padding: '16px', marginTop: '25px', width: '100%' }}>
        <h1>Welcome to the Climate Change Guide</h1>
        <img
          src="/static/food_chart.png"
          width="100%"
          height="auto"
          style={{ maxWidth: '600px' }}
        />
      </Card>
    );
  }
  const {
    match: {
      params: { category }
    }
  } = props;
  return (
    <Card style={{ padding: '16px', marginTop: '25px', width: '100%' }}>
      <h1>{inflection.titleize(category)}</h1>
      <img src="/static/food_chart.png" width="100%" height="auto" style={{ maxWidth: '600px' }} />
    </Card>
  );
};

export default withRouter(AppContent);
