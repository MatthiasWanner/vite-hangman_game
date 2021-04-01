import React, { useState } from 'react'
import './App.css';
import strRandom from './components/functions.jsx'
import LetterToGuess from './components/LetterToGuess.jsx';
import Keyboard from './components/Keyboard.jsx';


function App() {
  const [isUsed, setIsUsed] = useState([]);
  const [isFound, setIsFound] = useState([]);
  const [word, setWord] = useState(strRandom({includeNumbers: false, length: 5}).split(''));
  const [score, setScore] = useState(26);
  const won = isFound.length === word.length;

  function getGuessLetterStatus(letter){
    if(isFound.includes(letter)){
      return 'visible';
    }else{
      return 'hidden';
    }
  }

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

  const keyPress = (e) => {
    const letter = e.key.toUpperCase()
  }

  return (
    <div className="board-game">
      <div className="word-to-guess">
        {word.map((letter, index) => (
          <LetterToGuess
            letter={letter}
            status={getGuessLetterStatus(letter)}
            index={index}
            key={index}
          />
        ))}
      </div>
      <Keyboard
        keysUsed = {isUsed}
        keysFound = {isFound}
        onClick={compareLetters}
      />
      
    </div>

  )


}


export default App;
