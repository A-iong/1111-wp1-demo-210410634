import React, {
  useState,
  useContext,
  useReducer,
  useEffect,
  children,
} from 'react';
import Reducer_05 from './Reducer_05';

import cartItems from './data';

const AppContext_05 = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  amount: 4,
  total: 999999,
};

const AppProvider_05 = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer_05, initialState);

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

  const removeButton = () => {
    dispatch({ type: 'REMOVE_BUTTON' });
  };

  return (
    <AppContext_05.Provider
      value={{ ...state, clearCart, increase, decrease, removeButton }}
    >
      {children}
    </AppContext_05.Provider>
  );
};

const useGlobalContext_05 = () => {
  return useContext(AppContext_05);
};

export { AppProvider_05, useGlobalContext_05 };
