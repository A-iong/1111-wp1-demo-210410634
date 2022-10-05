import React, { useState } from 'react';

const T14_34_UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Aiong',
    age: 28,
    Message: 'random message',
});

  const changMessage = () =>{
    setPerson({...person,Message:'Aiong 210410634'});
  }

  return<>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.Message}</h3>
    <button className='btn' onClick={changMessage}>chang message</button>
  </>
};

export default T14_34_UseStateObject;
