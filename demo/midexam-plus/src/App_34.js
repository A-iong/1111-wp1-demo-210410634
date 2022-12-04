import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home_34 from './pages/Home_34';
import SharedLayout_34 from './pages/SharedLayout_34';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout_34 />}>
          <Route index element={<Home_34 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
