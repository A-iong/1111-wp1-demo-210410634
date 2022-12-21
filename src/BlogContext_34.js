import React, { useState, useEffect, useContext, useReducer } from 'react';
import data from './blogData_34';
import Alert_34 from './components/Alert_34';
import BlogList_34 from './components/BlogList_34';
import Reducer_34 from './Reducer_34';

const BlogContext_34 = React.createContext();

const initialstate = {
  blogs: data,
  alert: {
    show: false,
    msg: '',
    type: '',
  },
};

const BlogContextProvider_34 = ({ children }) => {
  // const [blogs, setBlogs] = useState(data);
  // const [alert, setAlert] = useState({
  //   show: false,
  //   msg: '',
  //   type: '',
  // });

  const [state, dispatch] = useReducer(Reducer_34, initialstate);

  const showAlert = (show = false, msg = '', type = '') => {
    // setAlert({ show, msg, type });
    dispatch({ type: 'SHOW_ALERT', payload: { show, msg, type } });
  };

  // console.log('blogs', blogs);

  const removeItem = (id) => {
    console.log(initialstate.alert)
    // setBlogs(blogs.filter((blog) => blog.id !== id));
    // showAlert(true, 'blog removed', 'danger');
    dispatch({ type: 'SHOW_ALERT', payload: { show: true, msg: 'blog removed', type: 'danger' } });
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id,
    });
  };

  const clearBlogs = () => {
    showAlert(true, 'empty all blogs', 'danger');
    // setBlogs([]);
  };

  const filterItems = (category) => {
    if (category === 'all') {
      // setBlogs(data);
    } else {
      const newBlogs = data.filter((blog) => blog.category === category);
      // setBlogs(newBlogs);
    }
  };

  return (
    <BlogContext_34.Provider
      value={{ ...state, ...initialstate.alert, removeItem, clearBlogs, filterItems, showAlert }}
    >
      {children}
    </BlogContext_34.Provider>
  );
};

const useBlogContext_34 = () => {
  return useContext(BlogContext_34);
};

export { BlogContextProvider_34, useBlogContext_34 };
