import { createContext, useContext } from "react";

export const AppContext = createContext(null);

export const useAppContext = ()=>{
    const context = useContext(AppContext);
    return context;
}
