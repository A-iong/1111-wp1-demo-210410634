import React, { useState } from 'react';

const T12_34_UseStateBasics = () => {
  //let title = 'random title'
  const [title, setTitle] = useState('random title');
  const handleclick = () => {
    setTitle('hello world');
    console.log('title1', title);
  };

  console.log('title2', title);

  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleclick}>
        chang title
      </button>
    </>
  );
};

export default T12_34_UseStateBasics;
