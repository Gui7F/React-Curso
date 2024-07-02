import { createContext, useReducer } from "react";

export const TitleChangeColor = createContext()

export const SwitchColorReducer = (state, action) =>{
    //switch 
   switch(action.type){
    case "RED":
        return{...state, color: "red" }
    case "GRAY":
        return {...state, color: "gray"}
    case "PADRAO":
        return {... state, color: "green"}
    default:
        return state
   }
}

export const TitleChangeColorProvider = ({children}) =>{

    const [state, dispacth] = useReducer(SwitchColorReducer, {color: "green"})

    return (
        <TitleChangeColor.Provider value={{... state, dispacth}}>
          {children}
        </TitleChangeColor.Provider>
    )
}