import React, {useState} from 'react'
import PropTypes from 'prop-types'
import '../css/Popup.css'


const Popup = ({ player, score, level, handleClick }) => {
    const [newPlayer, setName] = useState(player);
    const [newLevel, setLevel] = useState(level);

    return(
    <div className="Popups">
        <div className={`popup ${status}`}>
        <div className="win-message">
            <p>{`Congratulations ${player}, you win !!`}</p>
            <p>Your score : <span className='score'>{`${score}`}</span></p>
            <input className="player-input" placeholder={`${newPlayer}`} onChange={e => setName(e.target.value)}></input>
            <input className="level-input"  placeholder={`${newLevel}`}onChange={e => setLevel(e.target.value)}></input>
            <button className='reload-btn' onClick={() => handleClick(newPlayer, newLevel)}>New Game</button>
        </div>
        </div>
    </div>   

    )
}

Popup.propTypes = {
    player: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }


export default Popup