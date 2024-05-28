//CSS
import './App.css';


//Componets Stage Game
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';


//Data Words
import Words from "./data/wordList"

//Hooks utilizados
import { useCallback, useEffect, useState } from 'react';


//Array de objetos de controle dos estágios 
const stages = [
  {id:1, name:"start"},
  {id:2, name: "game"},
  {id:3, name:"game_over"}
]

function App() {

  //Try quantity
  const guessesQty = 3

  //Stage e words
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(Words);
  

  //States of word and letters
  const [pickedWord, setpickedWord] = useState("");
  const [pickedCategory, setpickedCategory] = useState("")
  const [letters, serLetters] = useState([])
  const [guessLetters, setGuessLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  //Pick a random word and random letter

  const pickWordAndLetter = useCallback(() => {

    //pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return {word, category}
  }, [words])

  // Start the game
  const startGame = useCallback(() =>{
   //clear all letters
   clearLetterStates();

   const {word,category} = pickWordAndLetter();


  // tranform in a one array of letters to lower case
   let wordLetters = word.split("");
   wordLetters = wordLetters.map((l) => l.toLowerCase())
  
   setpickedCategory(category)
   setpickedWord(word)
   serLetters(wordLetters)
  

    setGameStage(stages[1].name)
  }, [pickWordAndLetter])


  // Verify letter on input 

  const verifyLetter = (letter) =>{
    //validation for letter aways to lower case
    const normalizeLetter = letter.toLowerCase()
    const letterReceived = normalizeLetter

    // check if letters has been already utilized

    if(guessLetters.includes(letterReceived) || wrongLetters.includes(letterReceived))return;
    
    //push one letter or remove a chance
    if(letters.includes(letterReceived)){
      setGuessLetters((actualguessLetters) =>
        [...actualguessLetters, letterReceived]
      )

    }else{
      setWrongLetters((actualwrongLetters) =>
        [...actualwrongLetters, letterReceived]
      )

      setGuesses((actualGuesses) => (actualGuesses - 1))

    }
    
  }

  const clearLetterStates = () => {
    setGuessLetters([])
    setWrongLetters([])
  }
  // defeat condition
  useEffect(() => {

    if(guesses <=0 ){
      //reset all states

      clearLetterStates()
      
      setGameStage(stages[2].name);
    }

  }, [guesses])

  //check win condition
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]
    
    // win condition

    if(guessLetters.length === uniqueLetters.length){
      //add score
      setScore((actualScore) => actualScore += 100)
      // reset chances
      
      setGuesses(guessesQty)

      //restart game with new word
      startGame();
    }

  }, [guessLetters, letters, startGame])
  
  // Restart game e reset stages

  const restartGame = () =>{
    setScore(0);
    setGuesses(guessesQty)
    setGameStage(stages[0].name)
  }

  return (
    <div className ="App">
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && 
      <Game 
      verifyLetter={verifyLetter}
      pickedWord={pickedWord}
      pickedCategory={pickedCategory}
      letters={letters}
      guessLetters={guessLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score}
      />}
      {gameStage === "game_over" && <GameOver restartGame={restartGame} score={score}/>}
    </div>
  );
}

export default App;
