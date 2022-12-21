import React from 'react';

import { useGlobalContext_34 } from './Context_34'; 

// components
import Navbar_34 from './components/Navbar_34';
import CartContainer_34 from './components/CartContainer_34';
// items

const App_34 = () => {
  const { loading, cart} = useGlobalContext_34();
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar_34 />
      <CartContainer_34 />
    </main>
  );
};

export default App_34;
