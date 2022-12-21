import React from 'react';
import Blog_34 from './Blog_34';
import { useBlogContext_34 } from '../BlogContext_34';

const BlogList_34 = () => {
  const { blogs } = useBlogContext_34();
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
