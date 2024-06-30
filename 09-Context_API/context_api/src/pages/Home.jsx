import React from 'react'
//2- Aqui esta a função necessario para consumir o ExemploContext
// import { useContext } from 'react'
// import { ExemploContext } from '../context/ExemploContext'
import ChangeExemplo from '../components/ChangeExemplo'

//4- refatorando useContext, com hooks criamos ele fora do pages
import { useCounterContext } from '../hooks/useCounterContext'

// 5- contexto mais complexo, altera cor de texto usando useReducer()
import { useTitleColorContext } from '../hooks/useTitleColorContext.Js'

const Home = () => {

  const {exemplo} = useCounterContext() 
  const {color} = useTitleColorContext()

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>O valor do Exemplo:{exemplo}</p>
      {/* 3- Alterando o estado de contexto atraves de component */}
      <ChangeExemplo/>
    </div>
  )
}
export default Home