import React from 'react'
import Blog_05 from './Blog_05';

const BlogList_05 = ( {blogs, removeItem}) => {
return (
    <div className="blogs-center">
        { blogs.map( (blog) => {
            const {id,img,title,desc,category} = blog;
            return (
            <Blog_05 key={id} id={id} img={img} title={title}
             desc={desc} category={category} removeItem={removeItem} />
            )
        }) }
    </div>
)
}

export default BlogList_05
