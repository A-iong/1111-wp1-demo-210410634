import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App_34 from './App_34';
import { BlogContextProvider_34 } from './BlogContext_34';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogContextProvider_34>
      <App_34 />
    </BlogContextProvider_34>
  </React.StrictMode>
);
