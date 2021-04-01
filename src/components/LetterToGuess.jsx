import PropTypes from 'prop-types'
import React from 'react'
import '../css/LetterToGuess.css'

const HIDDEN_SYMBOL = "_"

const LetterToGuess = ({ letter, status, index }) => (
    <div className={`letter ${status}`}>
      <span className="symbol" key={index}>
        <p>{status === 'hidden' ? HIDDEN_SYMBOL : letter}</p>
      </span>
    </div>
  )
  
  LetterToGuess.propTypes = {
    letter: PropTypes.string.isRequired,
    status: PropTypes.oneOf([
      'hidden',
      'visible',
    ]).isRequired,
    index: PropTypes.number.isRequired
  }

export default LetterToGuess