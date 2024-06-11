
import './App.css';
import {useState, useEffect} from "react"

// custom hook 
import{useFetch} from "./hooks/useFetch"

const url = "http://localhost:3000/products"

function App() {
  const [data, setData] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // 4 custom hook
 const {data : items, httpConfig, loading, error} = useFetch(url)
  
//1-requisição com react utilizando useEffect
// useEffect(() =>{
//   const fetchData = async() => {
//     const res = await fetch(url)
//     const data = await res.json()
  
//     setProducts(data)
//   }
 
//   fetchData()
// },[])

//2- adicionando dados com fetch no metodo POST

const handleSubmit = async (e) =>{
  e.preventDefault()

  const product = {
    name, 
    price
  };
 
  // const res = await fetch(url, {
  //   method: "POST",
  //   headers:{
  //     "Content-Type" : "application/json"
  //   },
  //   body: JSON.stringify(product)
  // });

  // // 3 - carregamento dinâminco de dados 

  // const addedProduct = await res.json() // Aqui estamos covertendo a resposta da api em obj

  // setData((prevProdutcs) => [...prevProdutcs, addedProduct]);// para add dinamicamete em products

  //5- refatorando hook 

  httpConfig(product, "POST")
  setName("") // como o value do input esta linkado ao state alterando o state 
  setPrice("")//nos alteramos o input ou seja assim que termina a função input e resetado
}

const removeItem =(id)=>{
  httpConfig(id, "DELETE")
}



  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6- loading */}
      {loading &&  <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && <ul>{items && items.map((product)=>(
        <li key={product.id}>{product.name} - R${product.price} 
        <input type="submit" value= "remover" onClick={() => removeItem(product.id)}/> </li>
      ))}</ul>}
      
    <form onSubmit ={handleSubmit}>
      <label>
        Nome:
        <input type="text" 
        value={name} 
        name="name" 
        onChange={(e) => 
        setName(e.target.value)}/>
      </label>
      <label>
        Preço:
        <input type="number" 
        value={price} 
        name="price" 
        onChange={(e) => 
        setPrice(e.target.value)}/>
      </label>
      <input type="submit" value = "Criar"/>
    </form>
    </div>
  );
}

export default App;
