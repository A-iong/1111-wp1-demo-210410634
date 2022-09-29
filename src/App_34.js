import { useState } from 'react';
import Menu_34 from './components/Menu_34.js';
import Categories_34 from './components/Categories_34';
import items from './data';

const allCategories=['all', 'breakfast','lunch','shakes', '34']

const App_34 = () => {
  const [menuItems, setMenuItems] = useState(items);
 const [categories, setCategories]=useState(allCategories);

 const filterItems = (categories) => {

  if(categories === 'all'){

    setMenuItems(items);

  }else{

    const newItem = items.filter( (item) => item.category === categories );

    setMenuItems(newItem);

  }



}

//  console.log('categories',categories)
  console.log('menuItems',menuItems)
  return (
    <section className='menu'>
      {/*title*/}
  <div className='title'>
    <h2>Our Menu 210410634</h2>
    <div className='underline'></div>
  </div>
  {/* filter buttons */}
  <Categories_34 categories={categories}filterItems={filterItems}/>
  {/* menu items*/}
 <Menu_34 items={menuItems}/>
    </section>
  
  );
};
export default App_34;

