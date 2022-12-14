import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App_05 from './App_05';
import { AppProvider_05 } from './Context_05';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider_05>
      <App_05 />
    </AppProvider_05>
  </React.StrictMode>
);
