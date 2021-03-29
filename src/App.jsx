import React, { Component } from 'react'
import './App.css';
import strRandom from './components/functions.jsx'
import LetterToGuess from './components/LetterToGuess.jsx';
import KeybordKey from './components/KeyboardKey.jsx';


const latinUpperAlphabet = "AZERTYUIOPQSDFGHJKLMWXCVBN".split('');

class App extends Component {
  state = {
    word: this.generateWord(),
    lettersTried: [],
    lettersFound: []
  }

  generateWord(){
    const word = strRandom({ //strRandom is in functions.jsx
              includeNumbers: false,
              length: 5,
            }).split('');
    return word
  }

  compareLetters = (index, letter) => {
    const {word, lettersTried, lettersFound} = this.state
    if(word.includes(`${letter}`)){
      console.log(`La lettre ${letter} est dans le mot`)
      lettersFound.push(`${index}`)
      this.setState({ lettersFound: lettersFound})
    }else{
      console.log(`La lettre ${letter} n'est pas dans le mot`)
      lettersTried.push(`${index}`)
      this.setState({ lettersTried: lettersTried})
    }
  }

  getFeedbackForLetter(index) {
    const { lettersTried, lettersFound } = this.state
    
  }



  render(){
    const {word} = this.state
    console.log(word)
    return (
      <div className="board-game">
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
        <div className="keyboard">
          {latinUpperAlphabet.map((letter, index) => (
            <KeybordKey
              letter={letter}
              feedback="up"
              index={index}
              key={index}
              onClick={this.compareLetters}
            />
          ))
          }
        </div>
      </div>

    )

  }
}


export default App;
