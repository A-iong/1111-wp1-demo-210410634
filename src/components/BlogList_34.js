import React from 'react'
import Blog_34 from './Blog_34';

const BlogList_34 = ({blogs, removeItem})  => {
  return (
    <div className="blogs-center">
        { blogs.map( (blog) => {
           const {id, img, title, desc, category} = blog;
           return (
            <Blog_34 key={id} id={id} img={img} title={title} desc={desc} category={category} removeItem={removeItem}/>
           )
        }) }
      </div>
  )
}

export default BlogList_34
