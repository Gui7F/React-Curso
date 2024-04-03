import React from 'react'

const UserDetails = () => {

  

    const userDetails = [
        {id:1, Nome:"João", idade: 18},
        {id:2, Nome:"Ricardo", idade: 17},
        {id:3, Nome:"Mila", idade:19},
        {id:4, Nome:"Guilherme", idade:20}
      ]


  return (
    <div>
        <ul>
          {userDetails.map((user => (
            <li key={user.id}>{user.Nome} - {user.idade} -{user.idade >= 18 ? "Pode Tirar CNH" : "Não Pode Tirar CNH"} </li>
            )))}
        </ul>
    </div>
  )
}

export default UserDetails