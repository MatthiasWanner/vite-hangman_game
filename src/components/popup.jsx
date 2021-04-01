import PropTypes from 'prop-types'
import React from 'react'
import '../css/Popup.css'


const Popup = ({ player, status, score }) => {

    return(
        <div className={`popup ${status}`}>
        <span className="win-message">
            <p>{`Congratulations ${player}, you win !!`}</p>
            <p>Your score : <span className='score'>{`${score}`}</span></p>
        </span>
        </div>

    )
}

KeybordKey.propTypes = {
    player: PropTypes.string.isRequired,
    status: PropTypes.oneOf([
      'won',
      'notYetWon',
    ]).isRequired,
  }


export default Popup