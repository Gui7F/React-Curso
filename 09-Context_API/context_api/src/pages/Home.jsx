import React from 'react'
//2- Aqui esta a função necessario para consumir o ExemploContext
import { useContext } from 'react'
import { ExemploContext } from '../context/ExemploContext'
import ChangeExemplo from '../components/ChangeExemplo'

const Home = () => {

  const {exemplo} = useContext (ExemploContext)

  return (
    <div>
      <h1>Home</h1>
      <p>O valor do Exemplo:{exemplo}</p>
      {/* 3- Alterando o estado de contexto atraves de component */}
      <ChangeExemplo/>
    </div>
  )
}
export default Home