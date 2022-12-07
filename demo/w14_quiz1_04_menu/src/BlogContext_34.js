import React, { useState, useContext,} from 'react';

import items from './data';

const allCategories = ['all', 'breakfast', 'lunch', 'shakes', '34'];

const BlogContext_34 = React.createContext();

const BlogContextProvider_34 = ({ children }) => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (categories) => {
    if (categories === 'all') {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => item.category === categories);
      setMenuItems(newItems);
    }
  };

  return (
    <BlogContext_34.Provider value={{ categories, menuItems, filterItems }}>
      {children}
    </BlogContext_34.Provider>
  );
};

const useBlogContext_34 = () => {
  return useContext(BlogContext_34);
};

export { BlogContextProvider_34, useBlogContext_34 };
