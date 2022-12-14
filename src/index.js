import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App_34 from './App_34';

import { AppProvider_34 } from './Context_34';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider_34>
    <App_34 />
    </AppProvider_34>
  </React.StrictMode>
);
