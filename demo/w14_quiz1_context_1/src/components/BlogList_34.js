import React from 'react';
import Blog_34 from './Blog_34';
import { useBlogContext } from '../App_34';

const BlogList_34 = () => {
  const { blogs } = useBlogContext();
  return (
    <div className="blogs-center">
      {blogs.map((blog) => {
        const { id, img, title, desc, category } = blog;
        return (
          <Blog_34
            key={id}
            id={id}
            img={img}
            title={title}
            desc={desc}
            category={category}
          />
        );
      })}
    </div>
  );
};

export default BlogList_34;
