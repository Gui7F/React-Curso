import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Luffy", "Zoro", "Nami", "Usop", "Sanji"])

    const [users, setUser] = useState([
        {id: 1, age: 20, nome: "Guilherme"},
        {id: 2, age: 23, nome: "Mila"},
        {id: 3, age: 50, nome: 'Richard'}
    ])

    const Deleteuser = () =>{
         const randomNumber = Math.floor(Math.random() * 4);
         
         
         setUser((prevUser) =>{
            return prevUser.filter((user) => randomNumber !== user.id)
         })

    }

    return (
        <div>
            <ul>{list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
            <ul>
                {users.map((user) =>(
                    <li key={user.id}>
                        {user.nome} - {user.age}
                    </li>
                ))}
            </ul>
            <button onClick={Deleteuser}>DeleteRandom</button>
        </div>

    )
}

export default ListRender

// O react quando vamos imprimir listas ele pede que coloque uma prop Key para cada elemento
// uma key diferente normalmente quando recebemos o dado de algum BD teremos essas keys porem
// no nosso exemplo como nos estamos mandando um array literal teriamos que utilizar o index
// porem não é boa pratica utilizar o index porque ele é volatil caso algum dado seja apagado
// o index de cada item é alterado


// O segundo parametro de useState é sempre o previousState que seria o valor atual antes de 
// qualquer alteração de estado oque significa que temos acesso ao valor origal do array
// sempre que for necessario.

//Vamos criar uma função que utiliza o valor previousState para fazer um delete de um 
// usuário aleatorio