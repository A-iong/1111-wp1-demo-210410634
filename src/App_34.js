import { BrowserRouter, Routes, Route} from 'react-router-dom';

import HomePage_34 from './pages/HomePage_34';
import AboutPage_34 from './pages/AboutPage_34';
import ProductsPage_34 from './pages/ProductsPage_34';
import ErrorPage_34 from './pages/ErrorPage_34';
import SharedLayout_34 from './pages/SharedLayout_34';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SharedLayout_34/>}>
        <Route index element={<HomePage_34/>}/>
        <Route path='about' element={<AboutPage_34/>}/>
        <Route path='Products' element={<ProductsPage_34/>}/>
        <Route path='*' element={<ErrorPage_34/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
