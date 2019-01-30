import React from 'react';

const Food = () => (
  <div>
    <p>Food page</p>
    <figure>
      <img src="/static/food_chart.png" width="100%" height="auto" style={{ maxWidth: '600px' }} />
      <figcaption>
        From BBC{' '}
        <a
          href="https://www.bbc.com/news/science-environment-46459714"
          rel="noopener noreferrer"
          target="_blank"
        >
          source
        </a>
      </figcaption>
    </figure>
  </div>
);

export default Food;
