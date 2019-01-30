import React from 'react';

const Energy = () => (
  <div>
    <p>General rules of thumb:</p>
    <ul>
      <li>Use energy efficient lightbulbs, and turn off the lights when possible</li>
      <li>
        Unplug devices when not in use
        <ul>
          <li>To automate this, you can get remote controlled/timed outlets</li>
        </ul>
      </li>
      <li>
        Insulate your home, don't warm up/cool your home more than necessary{' '}
        <ul>
          <li>During cold weather: Put on more layers/jackets before turning up the heat</li>
          <li>During warm weather: Install thermal curtains to help keep your house cooler</li>
        </ul>
      </li>
      <li>Contact your energy provider, and see if they offer any renewable energy sources</li>
      <li>Buy solar panels for your home</li>
      <li>Support local clean energy efforts, including Solar, Wind, Hydro, Nuclear, etc</li>
    </ul>
    <figure style={{ border: '1px solid gray' }}>
      <a href="/static/gases_chart.png">
        <img
          src="/static/gases_chart.png"
          width="100%"
          height="auto"
          style={{ maxWidth: '600px' }}
        />
      </a>
      <figcaption>
        From EPA{' '}
        <a
          href="https://archive.epa.gov/epa/sites/production/files/2014-05/ghg-chart.png"
          rel="noopener noreferrer"
          target="_blank"
        >
          source
        </a>
      </figcaption>
    </figure>
  </div>
);

export default Energy;
