import { createContext, useContext } from "react";

const GlobalContext = createContext({})
export const useGlobalContext = () => useContext<any>(GlobalContext) 
export {GlobalContext} 
