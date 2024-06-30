import { useContext } from "react";
import {ExemploContext} from "../context/ExemploContext"

export const useCounterContext = () =>{
    const context = useContext(ExemploContext)

    if(!context){
        console.log("Context não encontrado por alguma razão")
    }

  return context
}