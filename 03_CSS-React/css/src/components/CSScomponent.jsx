import React from 'react'
import "./CSScomponent.css"
const CSScomponent = () => {
  return (
    <div>
        <h1 className='h1-comp-exe'>CSS do component</h1>
        <p className='p-comp'>Esse paragrafo e do component</p>
    </div>
  )
}

export default CSScomponent

// O css em nivel de componente temos que utilizar className para o estilo do componente não vazar em outro componente
// ou ate mesmo no css global