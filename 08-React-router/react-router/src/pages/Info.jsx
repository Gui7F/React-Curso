import { useParams } from "react-router-dom"
export const Info = () => {
  
    const {id} = useParams()

  return (
    <div>Informações do produto com ID: {id}</div>
  )
}
