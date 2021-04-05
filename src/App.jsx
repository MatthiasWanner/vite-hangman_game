import React, { useState, useEffect } from 'react'
import './App.css';
import WordToGuess from './components/WordToGuess';
import Keyboard from './components/Keyboard.jsx';
import Popup from './components/Popup.jsx';
import Welcome from './components/Welcome';
import Title from './components/Title';
import ScrollTo from './components/ScrollTo'

function App() {
  const [player, setPlayer] = useState('');
  const [isUsed, setIsUsed] = useState([]);
  const [isFound, setIsFound] = useState([]);
  const [level, setLevel] = useState('5');
  const [word, setWord] = useState('HANGMAN'.split(''));
  const [score, setScore] = useState(26);
  const [isStartOfParty, setIsStartOfParty] = useState(true);
  // const [keyPressed, setKeyPressed] = useState('');
  const haveName = player !== '';
  const won = word.every(i => isFound.includes(i));

  const getWord = (length) => {
    fetch(`http://localhost:5000/api/wordsapi/random/${length}`,{
      method: 'GET',
      credentials: 'same-origin',
      headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cache-Control': 'no-cache',
      },
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        setWord(data.split(''));
      })
      .catch(err => { 
      console.log(err);
      });
  }
  
  const setPlayerName = (name, level) => {
    const newName = name !== '' ? name : 'Anonymous player' ;
    const newLevel = level !== '' ? level : (Math.floor(Math.random() * 6) + 5).toString();
    setPlayer(newName);
    setLevel(newLevel);
    getWord(newLevel);
    setIsStartOfParty(false);
  }

  const compareLetters = (index, letter) => {
    if(isUsed.includes(letter) || isFound.includes(letter)){return;}
    // If word contain letter
    else if(word.includes(`${letter}`)){
      setIsFound([...isFound, letter]);
      setScore(score - 1);
    }else{
      setIsUsed([...isUsed, letter]);
      setScore(score - 1);
    }
  }

  const newGame = (player, level) => {
    setScore(26);
    setIsFound([]);
    setIsUsed([]);
    setPlayer(player);
    setLevel(level);
    getWord(level);

  }

  return (

    <div className="main-container">
      <div className="header">

        <Title />

        <div className="dashboard">
          {!haveName &&
            <Welcome
              handleClick={setPlayerName}
            />
          }
        
        </div>

        <ScrollTo />

      </div>
      
      <div className="board-game">
        <WordToGuess 
          isStart = {isStartOfParty}
          word={word}
          lettersFound={isFound}
        />

  
        {won && 
          <Popup
          player={player}
          score={score}
          level={level}
          handleClick={newGame}
          />
        }

        {haveName &&
          <Keyboard
            keysUsed = {isUsed}
            keysFound = {isFound}
            handleClick={compareLetters}
          />
        }
      
      </div>
    </div>
      

  )


}


export default App;
