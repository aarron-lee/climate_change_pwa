import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';

import AppContainer from 'ContainerComponents/AppContainer/AppContainer';

document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('root');
  if (root) {
    ReactDOM.render(<AppContainer />, root);
  }
});

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log(`SW registered: ${registration}`);
      })
      .catch(registrationError => console.log(`SW registration failed: ${registrationError}`));
  }
});
