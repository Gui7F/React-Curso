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

  //Stage e words
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(Words);
  

  //States of word and letters
  const [pickedWord, setpickedWord] = useState("");
  const [pickedCategory, setpickedCategory] = useState("")
  const [letters, serLetters] = useState([])

  //Pick a random word and random letter

  const pickWordAndLetter= () => {

    //pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return {word, category}
  }

  // Start the game
  const startGame = () =>{
   const {word,category} = pickWordAndLetter();


  // tranform in a one array of letters to lower case
   let wordLetters = word.split("");
   wordLetters = wordLetters.map((l) => l.toLowerCase())
   
   console.log(word,category)
   console.log(wordLetters)

   setpickedCategory(category)
   setpickedWord(word)
   serLetters(letters)
  

    setGameStage(stages[1].name)
  }

  // Verify letter on input 

  const verifyLetter = () =>{
    setGameStage(stages[2].name)
  }
  
  // Restart game e reset stages

  const restartGame = () =>{
    setGameStage(stages[0].name)
  }

  return (
    <div className ="App">
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game verifyLetter={verifyLetter}/>}
      {gameStage === "game_over" && <GameOver restartGame={restartGame}/>}
    </div>
  );
}

export default App;
