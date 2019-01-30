import React, { Fragment } from 'react';

{
  /* <img
  src="/static/food_chart.png"
  width="100%"
  height="auto"
  style={{ maxWidth: '600px' }}
/> */
}

export const CATEGORIES = {
  HOME: 'home',
  FOOD: 'food',
  TRANSPORT: 'transport',
  ENERGY: 'energy'
};

const CategoryContent = ({ category }) => {
  let content = '';

  switch (category) {
    case CATEGORIES.HOME:
      content = 'Welcome to the home page';
      break;
    default:
      content = 'Invalid category';
      break;
  }

  return <div>{content}</div>;
};

export default CategoryContent;
