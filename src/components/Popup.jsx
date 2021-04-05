import React, {useState} from 'react'
import PropTypes from 'prop-types'
import '../css/Popup.css'


const Popup = ({ player, score, level, handleClick }) => {
    const [newPlayer, setName] = useState(player);
    const [newLevel, setLevel] = useState(level);

    return(
    <div className="popups">
        <div className={`popup ${status}`}>
        <div className="win-message">
            <p>{`Congratulations ${player}, you win !!`}</p>
            <p>Your score : <span className='score'>{`${score}`}</span></p>
            <input className="popup-input player-input" placeholder={`${newPlayer}`} onChange={e => setName(e.target.value)}></input>
            <select name="new-level" id="new-level-select" className="popup-input new-level-select" onChange={e => setLevel(e.target.value)}>
                <option className="new-level-option" value="">--Please choose a level--</option>
                <option className="new-level-option" value="5">5</option>
                <option className="new-level-option" value="6">6</option>
                <option className="new-level-option" value="7">7</option>
                <option className="new-level-option" value="8">8</option>
                <option className="new-level-option" value="9">9</option>
                <option className="new-level-option" value="10">10</option>
            </select>
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