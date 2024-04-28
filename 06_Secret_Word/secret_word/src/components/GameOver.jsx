import "./GameOver.css"

const GameOver = ({restartGame}) => {
  return (
    <div>
        <h1>Game Over</h1>
        <button onClick={restartGame}>Teste</button>
    </div>
  )
}

export default GameOver