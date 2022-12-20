import React, { createContext, useReducer } from 'react'
import authReducer from './reducer/authReducer';
import authInitialState from './initialState/authInitialState';
export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState)
  return (
    <GlobalContext.Provider value={{ authState, authDispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;