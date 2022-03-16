import { createContext, useReducer } from "react";
import alertReducer from './AlertReducer';

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
  const initialState = null

  const [state, dispach] = useReducer(alertReducer, initialState)

  //Set an alert
  const setAlert = (msg, type) => {
    dispach({
      type: 'SET_ALERT',
      payload: {msg, type}
    })

    setTimeout(() => dispach({ type: 'REMOVE_ALERT' }), 3000)
  }

  return <AlertContext.Provider value={{alert: state, setAlert}}>
    {children}
  </AlertContext.Provider>
}

export default AlertContext