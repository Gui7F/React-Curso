import React, { useState } from 'react'

const CondicionalRender = () => {

  const [x] = useState(false)

  const [name, setName] = useState("Zoro")

  return (
    <div>
      <h1>If Simples</h1>
      {x && <p>Se x For True</p>}
      {!x && <p>Se x For False</p>}
      <div>
        <h1>If Ternário</h1>
        {name === "Luffy" ? (
          <p>Pirata encontrado, Luffy</p>
        ) : (
          <p>Pirata foragido</p>
        )}
        <button onClick={() => setName("Luffy")}>Encontre o pirata</button>
        
      </div>
      

    </div>
    
  )
}

export default CondicionalRender