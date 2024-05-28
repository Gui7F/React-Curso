import { useState, useRef } from "react"
import "./Game.css"
import "./GameOver"

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessLetters,
  wrongLetters,
  guesses,
  score
}) => {

  const [letter, setLetter] = useState("");
  const inputRef =  useRef(null)
  const handleSubmit = (e) =>{
    e.preventDefault();

    verifyLetter(letter);

    setLetter("")

    inputRef.current.focus()
  }

  return (
    <div className="game">
        <p className="points">
            Score : <span className="pointscolor">{score}</span>
        </p>
        <h1>Advinhe a palavra secreta:</h1>
        <h3 className="dica">
            Dica: <span>{pickedCategory}</span>
        </h3>
        <p>Você ainda tem {guesses} tentativa(s).</p>
        <div className="wordContainer">
          {letters.map((letter, i) => (
            guessLetters.includes(letter) ? (
              <span key={i} className="letter">{letter}</span>
            ) : (
              <span key={i} className="blankSquare"></span>
            )
          ))}
        </div>
       <div className="letterContainer">
         <p>Jogue uma letra para advinhar a palavra:</p>

         <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="letter" 
            maxLength="1" 
            required 
            onChange={(e) => setLetter(e.target.value)} 
            value={letter}
            ref={inputRef}
            />
            <button>Jogar!</button>
         </form>
       </div>
       <div className="wrongLetterContainer">
        <p>Letras ja utilizadas</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
       </div>
    </div>
  )
}

export default Game