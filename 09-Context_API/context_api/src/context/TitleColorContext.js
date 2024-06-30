import {  createContext, useReducer } from "react";

export const TitleColorContext = createContext()

export const TitleColorReducer = (state,action) =>{
    //switch
}

export const TitleColorContextProvider = ({children}) =>{

    const [state, dispatch] = useReducer(TitleColorReducer, {color: "green"})

    console.log(`Dado vindo do reducer `, state)

    return(
        <TitleColorContext.Provider value={{... state, dispatch}}>
            {children}
        </TitleColorContext.Provider>
    )

}


//useReducer, é um hook que serve como useState para gerenciar dados, porem ele consegue
// gerenciar dados mais complexos, ou seja mais de um dado neste caso vamos utilizar ele
// para gerenciar o style de cor de titulo porem poderia ser para mais de um titulo 
// sitaxe contst [state, dispatch] = useReducer(é dado ou objeto, ação ou função inicial)