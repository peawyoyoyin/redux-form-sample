import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

// blueprintjs
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
