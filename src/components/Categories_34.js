import React from 'react'

const Categories_34 = ({categories,filterItems}) => {
  console.log('categories',categories);
  return (
    <div className='btn-container'>
      {categories.map( (categories,index) =>{
       return(
       <button key={index} type="button" className="filter-btn" onClick={ ()=> filterItems
       (categories)}>{categories}
       </button>)
      })}
</div>
  )
}

export default Categories_34
