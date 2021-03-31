import React from 'react'
import PropTypes from 'prop-types'
import '../css/KeyboardKey.css'

const KeybordKey = ({ letter, status, index, onClick }) => {

  return (
    <button id={letter} className={`keyboard-key ${status}`} onClick={() => onClick(index, letter)}>
      <span key={index}>
          <p>{letter}</p>
      </span>
    </button>

  )
}
  
  KeybordKey.propTypes = {
    letter: PropTypes.string.isRequired,
    status: PropTypes.oneOf([
      'unused',
      'used',
      'found'
    ]).isRequired,
    clicked: PropTypes.bool,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  export default KeybordKey