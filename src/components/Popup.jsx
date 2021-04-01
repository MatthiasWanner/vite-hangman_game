import PropTypes from 'prop-types'
import React from 'react'
import '../css/Popup.css'


const Popup = ({ player, score, handleClick }) => {

    return(
        <div className={`popup ${status}`}>
        <span className="win-message">
            <p>{`Congratulations ${player}, you win !!`}</p>
            <p>Your score : <span className='score'>{`${score}`}</span></p>
            <button className='reload-btn' onClick={() => handleClick()}>New Game</button>
        </span>
        </div>

    )
}

Popup.propTypes = {
    player: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }


export default Popup