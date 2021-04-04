import React, { useState, useEffect } from 'react'
import './App.css';
import WordToGuess from './components/WordToGuess';
import Keyboard from './components/Keyboard.jsx';
import Popup from './components/Popup.jsx';
import Welcome from './components/Welcome';
import HeaderTitle from './components/HeaderTitle';
import ScrollTo from './components/ScrollTo'

function App() {
  const [player, setPlayer] = useState('');
  const [isUsed, setIsUsed] = useState([]);
  const [isFound, setIsFound] = useState([]);
  const [level, setLevel] = useState(0);
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
    setPlayer(name);
    setLevel(level);
    getWord(level);
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

    <div className="board-game">
      <div className="Header">
      <HeaderTitle />
        {!haveName &&
          <Welcome
            handleClick={setPlayerName}
          />
        }
      <ScrollTo />
      </div>

    

      

      <WordToGuess 
        isStart = {isStartOfParty}
        word={word}
        lettersFound={isFound}
      />
      <div className="pop-up-container">
      {won && 
      <Popup
        player={player}
        score={score}
        level={level}
        handleClick={newGame}
      />
      }
      </div>

      {haveName &&
        <Keyboard
          keysUsed = {isUsed}
          keysFound = {isFound}
          handleClick={compareLetters}
        />
      }
      
    </div>

  )


}


export default App;
