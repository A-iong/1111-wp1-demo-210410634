import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App_34 from './App_34';
import { BlogContextProvider_34 } from './BlogContext_34';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BlogContextProvider_34>
      <App_34 />
    </BlogContextProvider_34>
  </StrictMode>
);
