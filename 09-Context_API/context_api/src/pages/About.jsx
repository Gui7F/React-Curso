import { useContext } from 'react'
import { ExemploContext } from '../context/ExemploContext'
import {useTitleChangeColor} from "../hooks/useTitleChangeColor"

const About = () => {

  const {exemplo} = useContext(ExemploContext)

  //5-contexto mais complexo
const {color} = useTitleChangeColor()

  return (
    <div>
      <h1 style={{color: color}}>About</h1>
      <p>O valor do Exemplo:{exemplo}</p>
    </div>
  )
}

export default About