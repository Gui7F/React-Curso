import "./Game.css"

const Game = ({verifyLetter}) => {
  return (
    <div className="game">
        <p className="points">
            Score : <span className="pointscolor">000</span>
        </p>
        <h1>Advinhe a palavra secreta:</h1>
        <h3 className="dica">
            Dica: <span>Dica...</span>
        </h3>
        <div className="wordContainer">
            <span className="letter">A</span>
            <span className="blankSquare"></span>
        </div>
       <div className="letterContainer">
         <p>Jogue uma letra para advinhar a palavra:</p>

         <form>
            <input type="text" name="letter" maxLength="1" required />
            <button>Jogar!</button>
         </form>
       </div>
       <div className="wrongLetterContainer">
        <p>Letras ja utilizadas</p>
        <span>a,</span>
        <span>b</span>
       </div>
    </div>
  )
}

export default Game