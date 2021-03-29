import React, { Component } from 'react'
import './App.css';
import strRandom from './components/functions.jsx'
import LetterToGuess from './components/LetterToGuess.jsx';

const WORDTOGUESS = strRandom({
  includeNumbers: false,
  length: 5,
});
console.log(WORDTOGUESS)

const word = WORDTOGUESS.split('');
console.log(word);

class App extends Component {

  render() {
    return (
      <div className="word-to-guess">
        {word.map((letter, index) => (
          <LetterToGuess
            letter={letter}
            feedback="hidden"
            index={index}
            key={index}
          />
        ))}
      </div>
    )
  }
}

export default App;
