/*-----------------------------------------------------------------------------------

    Description: Windows 10 React.js | - Portfolio

-----------------------------------------------------------------------------------*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@components/App/index';
import '@styles/style.scss';

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
