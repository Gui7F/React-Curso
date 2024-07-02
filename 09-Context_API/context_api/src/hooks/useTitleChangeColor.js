import { useContext } from "react";
import { TitleChangeColor } from "../context/TitleChangeColor";

export const useTitleChangeColor =() =>{
    const context = useContext(TitleChangeColor)

    if(!context) {
        console.log('Contexto não encontrado')
    }

    return context
}