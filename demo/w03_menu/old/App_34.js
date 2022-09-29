import { useState } from 'react';
import Menu_05 from './components/Menu_05';
import Categories_05 from './components/Categories_05';
import items from './data';

const allCategories=['all', 'breakfast','lunch','shakes', 'dinner']

const App_05 = () => {
  const [menuItems, setMenuItems] = useState(items);
 const [categories, setCategories]=useState(allCategories);
 console.log('categories',categories)
  console.log('menuItems',menuItems)
  return (
    <section className='menu'>
      {/*title*/}
  <div className='title'>
    <h2>Our Menu</h2>
    <div className='underline'></div>
  </div>
  {/* filter buttons */}
  <Categories_05 categories={categories}/>
  {/* menu items*/}
 <Menu_05 items={menuItems}/>
    </section>
  
  );
};

export default App_05;

