import React from 'react';

const Waste = () => (
  <div>
    General rules of thumb:
    <ul>
      <li>Try to not let food in your refrigerator go to waste/expire</li>
      <li>Use reusable shopping bags</li>
      <li>Recycle, and try to purchase recyclable goods</li>
      <li>avoid items with excessive packaging</li>
      <li>
        avoid single-use items
        <ul>
          <li>e.g. disposable plates, plastic cups, etc</li>
          <li>if you absolutely need single-use items, get recyclable ones</li>
        </ul>
      </li>
      <li>Don't flush the toilet when not necessary</li>
      <li>
        Don't throw anything other than bodily fluids and solids, and toilet paper, into a toilet
        <ul>
          <li>
            "Flushable wipes" are{' '}
            <a href="https://phys.org/news/2018-04-dont-labelflushable-clog-sewers.html">
              NOT FLUSHABLE
            </a>
          </li>
        </ul>
      </li>
      <li>Turn off water when not in use (e.g. brushing teeth, etc)</li>
      <li>Don't water your lawns, try planting plants that do well in your local environment</li>
    </ul>
    <figure style={{ border: '1px solid gray' }}>
      <a href="static/food_waste.jpg">
        <img src="static/food_waste.jpg" width="100%" height="auto" style={{ maxWidth: '600px' }} />
      </a>
      <figcaption>
        From Cook for Good{' '}
        <a
          href="https://cookforgood.com/climate-change-food-waste/"
          rel="noopener noreferrer"
          target="_blank"
        >
          source
        </a>
      </figcaption>
    </figure>
  </div>
);

export default Waste;
