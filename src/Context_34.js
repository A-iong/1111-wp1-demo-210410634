import React, { useState, useContext, useReducer, useEffect, Children } from 'react';
import Reducer_34 from './Reducer_34';

import cartItem from './data'

const AppContext_34 = React.createContext();


const initialstate = {
  loading: false,
  cart: cartItem,
  amount: 4,
  total: 999.9,
}

const AppProvider_34 = ({children}) => {
  const [state, dispatch] =useReducer(Reducer_34,initialstate);
  return  <AppContext_34.Provider value={{...state}}>
    {children}
  </AppContext_34.Provider>
};

const useGlobalContext_34 = () => {
  return useContext(AppContext_34);
}

export  {AppProvider_34, useGlobalContext_34};
