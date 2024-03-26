
const PropsDestructring = ({Capitao, Intermediario, Cozinheiro, Navegadora}) => {
  return (
    <div>
        <h1>Props Destructring</h1>
        <ul>
            <li>Capitão: {Capitao}</li>
            <li>Intermediário: {Intermediario}</li>
            <li>Cozinheiro: {Cozinheiro}</li>
            <li>Navegadora: {Navegadora}</li>

        </ul>
    </div>
  )
}

export default PropsDestructring