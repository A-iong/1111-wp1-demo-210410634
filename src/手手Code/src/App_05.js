import React from 'react';
import { useGlobalContext_05 } from './Context_05';

// components
import Navbar_05 from './components/Navbar_05';
import CartContainer_05 from './components/CartContainer_05';
// items

const App_05 = () => {
  const { loading, cart } = useGlobalContext_05();
  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }
  return (
    <main>
      <Navbar_05 />
      <CartContainer_05 />
    </main>
  );
};

export default App_05;
