import React, { useState, useEffect, useContext } from 'react';
import data from './blogData_34';
import Alert_34 from './components/Alert_34';
import BlogList_34 from './components/BlogList_34';

import { useBlogContext_34 } from './BlogContext_34';

const App_34 = () => {
  const { blogs, alert, removeItem, clearBlogs, filterItems, showAlert } = useBlogContext_34();
  return (
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
  );
};

export default App_34;
