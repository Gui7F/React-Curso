import { useState, useEffect } from "react";

// 4- cutom hook, que é basicamente um componente que vamos criar para fazer requisiçao
// ao inves de criar ela no app direto

export const useFetch = (url) =>{
    const [data, setData] = useState(null)
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFeth] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    //5-reafatorando o post 
    //configurando o a requisição aqui no hook nao preciso repitir codigo em outros locais

    const httpConfig = (data, method) =>{
        if(method === 'POST'){
            setConfig({
                method,
                headers:{
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(data),
            })

            setMethod(method)
        }

        if(method === "DELETE"){
            setConfig({
                method,
                headers:{
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(data)
            })

        }

        setMethod(method)
    }

    useEffect(() =>{
        const fetchData = async() =>{
            setLoading(true)
            try {
                
                const res = await fetch (url)
                const json = await res.json()
    
                setData(json)
    
               
            } catch (error) {
                setError("Houve um erro ao carregar os dados")
            }

            setLoading(false)
          
        }

        fetchData()

        
    },[url, callFetch]);
    // 5- reafatorando post 
    useEffect(() =>{
        const httpRequest = async () =>{
        if(method === "POST"){
            let fetchOptions= [url, config];

            const res = await fetch(...fetchOptions)
            const json = await res.json()

            setCallFeth(json)
           }
        }
        httpRequest()
    }, [config, url, method])

    return{data, httpConfig, loading, error}
}