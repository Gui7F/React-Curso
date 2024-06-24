import { useContext } from 'react'
import { ExemploContext } from '../context/ExemploContext'


const Projects = () => {
  
  const {exemplo} = useContext(ExemploContext)

  return (
    <div>
      <h1>Home</h1>
      <p>O valor do Exemplo:{exemplo}</p>
    </div>
  )
}

export default Projects