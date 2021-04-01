import React, { useState } from 'react'
import './App.css';
import strRandom from './components/functions.jsx'
import WordToGuess from './components/WordToGuess';
import Keyboard from './components/Keyboard.jsx';
import Popup from './components/Popup.jsx';


function App() {
  const [player, setPlayer] = useState('Matthias');
  const [isUsed, setIsUsed] = useState([]);
  const [isFound, setIsFound] = useState([]);
  const [word, setWord] = useState(strRandom({includeNumbers: false, length: 5}).split(''));
  const [score, setScore] = useState(26);
  const won = word.every(i => isFound.includes(i));

  const compareLetters = (index, letter) => {
    if(isUsed.includes(letter) || isFound.includes(letter)){return;}
    else if(word.includes(`${letter}`)){
      console.log(`La lettre ${letter} est dans le mot`)
      setIsFound([...isFound, letter]);
      setScore(score - 1);
    }else{
      console.log(`La lettre ${letter} n'est pas dans le mot`);
      setIsUsed([...isUsed, letter]);
      setScore(score - 1);
    }
  }

  const newGame = () => {
    setScore(26);
    setIsFound([]);
    setIsUsed([]);
    setWord(strRandom({includeNumbers: false, length: 5}).split(''))

  }

  const keyPress = (e) => {
    const letter = e.key.toUpperCase()
  }

  return (
    <div className="board-game">
      <WordToGuess 
        word={word}
        lettersFound={isFound}
      />

    <div className="pop-up-container">
      {won && 
      <Popup
        player={player}
        score={score}
        onClick={newGame}
      />
      }
      </div>

      <Keyboard
        keysUsed = {isUsed}
        keysFound = {isFound}
        handleClick={compareLetters}
      />
      
    </div>

  )


}


export default App;