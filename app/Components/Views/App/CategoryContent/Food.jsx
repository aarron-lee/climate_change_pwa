import React from 'react';

const Food = () => (
  <div>
    A few general rules of thumb is:
    <ul>
      <li>
        Whenever possible, subsitute high-impact animal products with lower-impact ones (see chart
        below).
        <ul>
          <li>
            While the ideal is to have none, if it's too hard, start off with substituting
            higher-impact products with lower-impact ones
          </li>
          <li>e.g. eat chicken instead of beef, etc</li>
        </ul>
      </li>
      <li>
        Eat less industrially produced/processed food, and avoid packaged foods
        <ul>
          <li>e.g. drink tap/filtered water, not bottled water</li>
        </ul>
      </li>
      <li>Reduce excessive portion sizes (stay healthier and help the environment!)</li>
      <li>Reduce processed drink intake (water is great!)</li>
      <li>
        <a
          href="https://www.nytimes.com/2018/11/20/magazine/palm-oil-borneo-climate-catastrophe.html"
          rel="noopener noreferrer"
          target="_blank"
        >
          Avoid Palm Oil
        </a>
        <ul>
          <li>It can be found in soaps, washing powders, etc</li>
        </ul>
      </li>
    </ul>
    <figure style={{ border: '1px solid gray' }}>
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
