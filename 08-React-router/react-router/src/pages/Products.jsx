import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
const Products = () => {
  //4-rota dinâmica
  const {id} = useParams()
  //5-carregamento de dados dinâmicos 

  const url = "http://localhost:3000/products/" + id
  const {data: product, loading, error} = useFetch(url)

  return (
    <>
       <p>ID do produto: {id}</p>
        {error && <p>Ocorreu algum erro...</p>}
        {loading && <p>Carregando dados...</p>}
        {product && (
            <div>
                <h1>{product.name}</h1>
                <h2>{product.price}</h2>
              {/* 6-Nested Routes */}
                <Link to={`/products/${id}/info`}>Mais informações</Link>
            </div>
        // Nested Routes, é para colocar mais parametros na url mesclados com a url existente
         
        )}
    </>
  )
}

export default Products