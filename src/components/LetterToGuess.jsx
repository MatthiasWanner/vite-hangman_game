import PropTypes from 'prop-types'
import React from 'react'
import '../css/LetterToGuess.css'

const HIDDEN_SYMBOL = "_"

const LetterToGuess = ({ letter, feedback, index }) => (
    <div className={`letter ${feedback}`}>
      <span className="symbol" key={index}>
        <p>{feedback === 'hidden' ? HIDDEN_SYMBOL : letter}</p>
      </span>
    </div>
  )
  
  LetterToGuess.propTypes = {
    letter: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf([
      'hidden',
      'visible',
    ]).isRequired,
    index: PropTypes.number.isRequired
  }

export default LetterToGuess