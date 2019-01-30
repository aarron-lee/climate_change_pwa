import React from 'react';

const Transportation = () => (
  <div>
    <p>General rules of thumb:</p>
    <ul>
      <li>
        Whenever possible, substitute high-impact travel options with lower-impact ones (see chart
        below)
        <ul>
          <li>
            Note, flying long-distance can be especially bad depending on the length of the flight.
            While flights may be unavoidable, as an alternative, consider traveling by train in
            countries that have strong rail networks
          </li>
        </ul>
      </li>
      <li>When purchasing vehicles, prioritize gas-efficient cars</li>
      <li>If you purchase an electric-only car, try to charge it using renewable energy.</li>
      <li>Support local public transportation initiatives</li>
    </ul>
    <figure style={{ border: '1px solid gray' }}>
      <a href="/static/transport.jpg">
        <img src="/static/transport.jpg" width="100%" height="auto" style={{ maxWidth: '600px' }} />
      </a>
      <figcaption>
        From Sightline Institute{' '}
        <a href="https://www.sightline.org/maps-and-graphics/climate-co2bymode/">Source</a>
      </figcaption>
    </figure>
  </div>
);

export default Transportation;
