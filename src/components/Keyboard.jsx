import React from 'react'
import PropTypes from 'prop-types'
import KeyboardKey from './KeyboardKey.jsx';
import '../css/Keyboard.css';

const LATINUPPERALPHABET = "AZERTYUIOPQSDFGHJKLMWXCVBN".split('');

function Keyboard({keysUsed, keysFound, handleClick}){
    

    function getKeyStatus(letter){
        if(keysUsed.includes(letter)){
          return 'used';
        }else if(keysFound.includes(letter)){
          return 'found';
        }else{
          return 'unused';
        }
      }

    return(
        <div className="keyboard">
        {LATINUPPERALPHABET.map((letter, index) => (
          <KeyboardKey
            letter={letter}
            status={getKeyStatus(letter)}
            index={index}
            key={index}
            handleClick={() => handleClick(index, letter)}
          />
        ))
        }
      </div>
    )
}

Keyboard.propTypes = {
    keysUsed: PropTypes.array.isRequired,
    keysFound: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired,
  }

export default Keyboard