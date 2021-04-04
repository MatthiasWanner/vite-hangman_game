import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../css/Welcome.css'


const Welcome = ({handleClick}) => {
    const [name, setName] = useState('');
    const [level, setLevel] = useState(0);

    return(
    <div className="Welcom">  
        <div className="welcome-page">
            <div className={`welcome-message`}>
                <span className="win-message">
                    <p><span className="welcome-text">Welcome to my Hangman Game</span></p>
                    <p><span>Please enter your name</span></p>
                    <input className="player-input" className="name-input" onChange={e => setName(e.target.value)}></input>
                    <p><span>Please enter number of letters you want to guess</span></p>
                    <input className="level" className="level-input" onChange={e => setLevel(+e.target.value)}></input>
                    <button className='submit-btn' onClick={() => handleClick(name, level)}>Play</button>
                </span>
            </div>
        </div>
    </div> 

    )
}

Welcome.propTypes = {
    handleClick: PropTypes.func.isRequired,
  }


export default Welcome