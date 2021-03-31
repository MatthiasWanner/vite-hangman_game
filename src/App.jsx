import React, { useState } from 'react'
import './App.css';
import strRandom from './components/functions.jsx'
import LetterToGuess from './components/LetterToGuess.jsx';
import KeybordKey from './components/KeyboardKey.jsx';


const latinUpperAlphabet = "AZERTYUIOPQSDFGHJKLMWXCVBN".split('');

function App() {

  const [isUsed, setIsUsed] = useState([]);
  const [isFound, setIsFound] = useState([]);
  const [word, setWord] = useState(strRandom({includeNumbers: false, length: 5}).split(''));
  const [score, setScore] = useState(26);
  
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

  function getKeyStatus(letter){
    if(isUsed.includes(letter)){
      return 'used';
    }else if(isFound.includes(letter)){
      return 'found';
    }else{
      return 'unused';
    }
  }

  function getGuessLetterStatus(letter){
    if(isFound.includes(letter)){
      return 'visible';
    }else{
      return 'hidden';
    }
  }

  const keyPress = (e) => {
    const letter = e.key.toUpperCase()
    console.log(typeof letter);
  }
  document.addEventListener('keydown', keyPress);

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
      <div className="keyboard">
        {latinUpperAlphabet.map((letter, index) => (
          <KeybordKey
            letter={letter}
            status={getKeyStatus(letter)}
            index={index}
            key={index}
            onClick={compareLetters}
          />
        ))
        }
      </div>
    </div>

  )


}


export default App;
