import React from 'react';
import Home from './Home';
import Food from './Food';

export const CATEGORIES = {
  HOME: 'home',
  FOOD: 'food',
  TRANSPORT: 'transport',
  ENERGY: 'energy'
};

const getContent = category => {
  switch (category) {
    case CATEGORIES.HOME:
      return <Home />;
    case CATEGORIES.FOOD:
      return <Food />;
    default:
      return 'Invalid category';
  }
};

const CategoryContent = ({ category }) => {
  let content = getContent(category);

  return <div>{content}</div>;
};

export default CategoryContent;
