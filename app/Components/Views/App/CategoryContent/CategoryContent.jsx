import React from 'react';
import Home from './Home';
import Food from './Food';
import Energy from './Energy';
import Transportation from './Transportation';

export const CATEGORIES = {
  HOME: 'home',
  FOOD: 'food',
  ENERGY: 'energy',
  TRANSPORT: 'transport'
};

const getContent = category => {
  switch (category) {
    case CATEGORIES.HOME:
      return <Home />;
    case CATEGORIES.FOOD:
      return <Food />;
    case CATEGORIES.ENERGY:
      return <Energy />;
    case CATEGORIES.TRANSPORT:
      return <Transportation />;
    default:
      return 'Invalid category';
  }
};

const CategoryContent = ({ category }) => {
  let content = getContent(category);

  return <div>{content}</div>;
};

export default CategoryContent;
