import React, { useState, useEffect } from 'react';
import { UNSAFE_DataRouterStateContext } from 'react-router';

const url = 'https://api.github.com/users';

const T23_34_UseEffectFetchData = () => {

  const[users, setUsers] = useState([]);

  const getUsers = async () => {
    try{
      const response = await fetch(url);
      const data = await response.json();
      console.log('data',data);
      setUsers(data);
    }catch(err){
    console.log('error', err);
    }
  }

console.log('users',users);

//run ones
useEffect( () => {
  getUsers();
},[])

 return (
 <>
  <ul className='users'>
    { users.map( (user) => {
        const {id, login,avatar_url,html_url } =user;
      return(      
      <li key={id}>
        <img src={avatar_url} alt={login} />
        <div>
          <h4>{login}</h4>
          <a href={html_url}>profile</a>
        </div>
      </li>
      )

    })}
  </ul>
 </>)
};

export default T23_34_UseEffectFetchData;
