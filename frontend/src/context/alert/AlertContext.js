import { createContext, userReducer } from "react";
import alertReducer from './AlertReducer'



const AlertContext=createContext()



export const AlertProvider=({children})=>{

    const initialState=null
    const [state, dispatch]=userReducer(alertReducer, initialState)

    return <AlertContext.Provider value={{alert:state}}>
        {children}
    </AlertContext.Provider>
}

export default AlertContext