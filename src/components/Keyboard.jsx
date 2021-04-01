import React from 'react'
import KeyboardKey from './KeyboardKey.jsx';

const LATINUPPERALPHABET = "AZERTYUIOPQSDFGHJKLMWXCVBN".split('');

const Keyboard = ({keysUsed, keysFound, onClick}) => {
    

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
            onClick={() => onClick(index, letter)}
          />
        ))
        }
      </div>
    )
}

export default Keyboard