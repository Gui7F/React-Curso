import React from 'react'
//2- Aqui esta a função necessario para consumir o ExemploContext
import { useContext } from 'react'
import { ExemploContext } from '../context/ExemploContext'
import ChangeExemplo from '../components/ChangeExemplo'

//5-context mais complexo 
import { useTitleChangeColor } from '../hooks/useTitleChangeColor'




const Home = () => {

  const {exemplo} = useContext (ExemploContext)
//5-contexto mais complexo
const {color, dispacth} = useTitleChangeColor()


//6-Alterado state mais complexo

const setColorTitle = (color) =>{
  dispacth({type : color});
}

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>O valor do Exemplo:{exemplo}</p>
      {/* 3- Alterando o estado de contexto atraves de component */}
      <ChangeExemplo/>
      {/* 6-Alterando contexto mais complexo */}
      <div>
        <button onClick={() =>{setColorTitle("RED")}}>RED</button>
        <button onClick={() =>{setColorTitle("GRAY")}}>GRAY</button>
        <button onClick ={() =>{setColorTitle("PADRAO")}}>DEFAULT</button>
      </div>
    </div>
  )
}
export default Home