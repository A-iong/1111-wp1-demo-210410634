import React, { useState, useContext } from 'react';
import data from './blogData_34';
import Alert_34 from './components/Alert_34';
import BlogList_34 from './components/BlogList_34';

const BlogContext_34 = React.createContext();

const BlogContextProvider_34 = ({ children }) => {
  const [blogs, setBlogs] = useState(data);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const removeItem = (id) => {
    showAlert(true, 'blog removed', 'danger');
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  console.log('blogs', blogs);

  const clearBlogs = () => {
    showAlert(true, 'empty all blogs', 'danger');
    setBlogs([]);
  };

  const filterItems = (category) => {
    if (category === 'all') {
      setBlogs(data);
    } else {
      const newBlogs = data.filter((blog) => blog.category === category);
      setBlogs(newBlogs);
    }
  };

  return (
    <BlogContext_34.Provider
      value={{ ...state, alert, removeItem, clearBlogs, filterItems, showAlert }}
    >
      {children}
    </BlogContext_34.Provider>
  );
};

const useBlogContext_34 = () => {
  return useContext(BlogContext_34);
};

export { BlogContextProvider_34, useBlogContext_34 };
