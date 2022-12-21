import React, {
  useState,
  useContext,
  useReducer,
  useEffect,
  Children,
} from 'react';
import { json } from 'react-router-dom';
import Reducer_34 from './Reducer_34';

//import cartItem from './data';

const url = 'https://course-api.com/react-useReducer-cart-project';


const AppContext_34 = React.createContext();

const initialstate = {
  loading: false,
  cart: [],
  amount: 4,
  total: 999.9,
};

const AppProvider_34 = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer_34, initialstate);

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id});
  }

const fetchData = async () => {
  dispatch({ type: 'LOADING'});
  const response = await fetch(url);
  const cart = await response.json();
  console.log('cart',cart);
  dispatch({ type:'DISPLAY_ITEMS', payload: cart });
}

useEffect(()=>{
  fetchData();
}, [])

  return (
    <AppContext_34.Provider value={{ ...state, clearCart, increase,decrease, remove}}>
      {children}
    </AppContext_34.Provider>
  );
};

const useGlobalContext_34 = () => {
  return useContext(AppContext_34);
};

export { AppProvider_34, useGlobalContext_34 };
