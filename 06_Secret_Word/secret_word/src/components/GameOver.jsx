import "./GameOver.css"

const GameOver = ({restartGame,score}) => {
  return (
    <div className="game_over_screen">
        <h1>Game Over</h1>
        <button onClick={restartGame}>Reiniciar</button>
        <h2>Pontos : <span>{score}</span> </h2>
    </div>
  )
}

export default GameOver