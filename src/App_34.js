import React, { useState, useContext } from 'react';
import data from './blogData_34';
import Alert_34 from './components/Alert_34';
import BlogList_34 from './components/BlogList_34';

const BlogContext = React.createContext();

const App_34 = () => {
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
    <BlogContext.Provider
      value={{ blogs, alert, removeItem, clearBlogs, filterItems, showAlert }}
    >
      <section className="blogs">
        {alert.show && <Alert_34 {...alert} removeAlert={showAlert} />}
        <div className="section-title">
          <h2>CSS Grid using breakpoints</h2>
        </div>
        <div className="filter-container">
          <button
            type="button"
            className="filter-btn"
            onClick={() => filterItems('all')}
          >
            all
          </button>
          <button
            type="button"
            className="filter-btn"
            onClick={() => filterItems('lifestyle')}
          >
            lifestyle
          </button>
          <button
            type="button"
            className="filter-btn"
            onClick={() => filterItems('travel')}
          >
            travel
          </button>
        </div>
        <div className="blogs-center">
          <BlogList_34 key={1} />
        </div>
        <button className="clear-btn" onClick={clearBlogs}>
          clear all blogs
        </button>
      </section>
    </BlogContext.Provider>
  );
};

const useBlogContext = () => {
  return useContext(BlogContext);
};

export { App_34, useBlogContext };
