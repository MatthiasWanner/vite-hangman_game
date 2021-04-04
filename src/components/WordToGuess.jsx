import PropTypes from 'prop-types'
import React from 'react'
import LetterToGuess from './LetterToGuess'
import '../css/WordToGuess.css'


const WordToGuess = ( {isStart, word, lettersFound} ) => {

    function getGuessLetterStatus(letter){
        if(lettersFound.includes(letter)){
          return 'visible';
        }else{
          return 'hidden';
        }
      }

    return(
        <div className="word-to-guess">
        {word.map((letter, index) => (
          <LetterToGuess
            letter={letter}
            status={isStart ? 'visible' : getGuessLetterStatus(letter)}
            index={index}
            key={index}
          />
        ))}
      </div>
    )
}

WordToGuess.propTypes = {
    word: PropTypes.array.isRequired,
    lettersFound: PropTypes.array.isRequired
  }

export default WordToGuess