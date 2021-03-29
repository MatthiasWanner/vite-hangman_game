import React from 'react'
import PropTypes from 'prop-types'
import '../css/KeyboardKey.css'

const KeybordKey = ({ letter, feedback, index, onClick }) => (
    <button id={letter} className={`keyboard-key ${feedback}`} onClick={() => onClick(index, letter)}>
      <span key={index}>
          <p>{letter}</p>
      </span>
    </button>
  )
  
  KeybordKey.propTypes = {
    letter: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf([
      'down',
      'up',
      'used',
      'found'
    ]).isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  }


  export default KeybordKey