//1- Vamos criar o contexto utilizando a função createContext e vamos salva um valor
// utilizando o useState que vai ser nosso contexto de fato
import { createContext, useState } from "react";
export const ExemploContext = createContext();

//2- Vamos criar um provedor do contexto que é uma função para retornar o JSX do contexto
// com um objeto de parametro onde o valor sera imprido do outro lado

export const ExemploContextProvider = ({children}) =>{
    const [exemplo, setExemplo] = useState(5)
    
    return (
        <ExemploContext.Provider value={{exemplo, setExemplo}}>
            {children}
        </ExemploContext.Provider>
    )
}