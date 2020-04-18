import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn:
    'https://97d1496a9e29461e86c67f4afa2ce8d6@o159631.ingest.sentry.io/5204599',
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
