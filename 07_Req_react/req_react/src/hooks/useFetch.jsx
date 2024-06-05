import { useState, useEffect } from "react";

// 4- cutom hook, que é basicamente um componente que vamos criar para fazer requisiçao
// ao inves de criar ela no app direto

export const useFetch = (url) =>{
    const [data, setData] = useState(null)

    useEffect(() =>{
        const fetchData = async() =>{
            const res = await fetch (url)
            const json = await res.json()

            setData(json)
        }

        fetchData()
    },[url]);
    
    return{data}
}