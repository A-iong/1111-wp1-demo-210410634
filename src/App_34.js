import { useState } from 'react';
import Menu_34 from './components/Menu_34';
import Categories_34 from './components/Categories_34';


import { useBlogContext_34 } from './BlogContext_34';


const App_34 = () => {
  const { categories, menuItems, filterItems } = useBlogContext_34();

  console.log('categories', categories);
  console.log('menuItems', menuItems);
  return (
    <section className="menu">
      {/*title*/}
      <div className="title">
        <h2>Our Menu 210410634</h2>
        <div className="underline"></div>
      </div>
      {/* filter buttons */}
      <Categories_34 categories={categories} filterItems={filterItems} />
      {/* menu items*/}
      <Menu_34 items={menuItems} />
    </section>
  );
};

export default App_34;
