import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage_34 from './pages/HomePage_34';
import ErrorPage_34 from './pages/ErrorPage_34';
import SharedLayout_34 from './pages/SharedLayout_34';

import P1Page_34 from './pages/P1Page_34';
import P2Page_34 from './pages/P2Page_34';
import P3Page_34 from './pages/P3Page_34';
import P4Page_34 from './pages/P4Page_34';
import P5Page_34 from './pages/P5Page_34';
import P6Page_34 from './pages/P6Page_34';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout_34 />}>
          <Route index element={<HomePage_34 />} />
          <Route path='P1_34' element={<P1Page_34 />} />
          <Route path='P2_34' element={<P2Page_34 />} />
          <Route path='P3_34' element={<P3Page_34 />} />
          <Route path='P4_34' element={<P4Page_34 />} />
          <Route path='P5_34' element={<P5Page_34 />} />
          <Route path='P6_34' element={<P6Page_34 />} />
          <Route path='*' element={<ErrorPage_34 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
