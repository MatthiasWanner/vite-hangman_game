import React from 'react'
import PropTypes from 'prop-types'
import '../css/KeyboardKey.css'

const KeyboardKey = ({ letter, status, index, handleClick }) => {

  return (
    <button id={letter} className={`keyboard-key ${status}`} onClick={() => handleClick(index, letter)}>
      <span key={index}>
          <p>{letter}</p>
      </span>
    </button>

  )
}
  
  KeyboardKey.propTypes = {
    letter: PropTypes.string.isRequired,
    status: PropTypes.oneOf([
      'unused',
      'used',
      'found'
    ]).isRequired,
    clicked: PropTypes.bool,
    index: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
  }

  export default KeyboardKey