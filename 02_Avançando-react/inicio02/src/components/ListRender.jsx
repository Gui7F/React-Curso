import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Luffy", "Zoro", "Nami", "Usop", "Sanji"])

    const [users] = useState([
        {id: 2324, age: 20, nome: "Guilherme"},
        {id: 254563, age: 23, nome: "Mila"},
        {id: 3535, age: 50, nome: 'Richard'}
    ])

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


        </div>

    )
}

export default ListRender

// O react quando vamos imprimir listas ele pede que coloque uma prop Key para cada elemento
// uma key diferente normalmente quando recebemos o dado de algum BD teremos essas keys porem
// no nosso exemplo como nos estamos mandando um array literal teriamos que utilizar o index
// porem não é boa pratica utilizar o index porque ele é volatil caso algum dado seja apagado
// o index de cada item é alterado