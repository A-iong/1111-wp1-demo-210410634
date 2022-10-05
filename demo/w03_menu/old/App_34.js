import { useState } from 'react';
import Menu_34 from './components/Menu_34';
import Categories_34 from './components/Categories_34';
import items from './data';

const allCategories=['all', 'breakfast','lunch','shakes', 'dinner']

const App_34 = () => {
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
  <Categories_34 categories={categories}/>
  {/* menu items*/}
 <Menu_34 items={menuItems}/>
    </section>
  
  );
};

export default App_34;

