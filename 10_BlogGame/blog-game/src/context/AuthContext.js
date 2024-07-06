import { createContext, useContext } from "react";

const AuthContext = createContext()

export const AuthContextProvider = ({children, value}) =>{
   <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext () {
   return useContext(AuthContext)
}