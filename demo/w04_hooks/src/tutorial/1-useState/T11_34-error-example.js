import React from 'react';

const T11_34_ErrorExample = () => {
  let title = 'random title'
  const handleclick =()=> {
    title= 'hello world'
    console.log('title',title);
  }
  return (
    <>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleclick} >
        chang title
      </button>
    </>
  );
};

export default T11_34_ErrorExample;
