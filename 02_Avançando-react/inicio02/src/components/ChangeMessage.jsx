
const ChangeMessage = ({changeMsg}) => {

   const messages = ["Olá", "Mundo", "Do Caraí"]
  return (
    <div>
       <button onClick={() => changeMsg(messages[0])}>1</button>
       <button onClick={() => changeMsg(messages[1])}>2</button>
       <button onClick={() => changeMsg(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMessage