import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../css/Welcome.css'


const Welcome = ({handleClick}) => {
    const [name, setName] = useState('');
    const [level, setLevel] = useState('');

    return(
    <div className="Welcom">  
        <div className="welcome-page">
            <div className={`welcome-message`}>
                    <label htmlFor="player-input" className="welcome-text"><span className="player-label">Please enter your name :</span></label>
                    <input id="player-input" className="input player-input" placeholder="Enter your name" onChange={e => setName(e.target.value)}></input>
                    <label htmlFor="level-select" className="welcome-text"><span className="level-label">Please enter number of letters you want to guess :</span></label>
                    <select name="level" id="level-select" className="input level-select" onChange={e => setLevel(e.target.value)}>
                        <option className="level-option" value="">--Please choose a level--</option>
                        <option className="level-option" value="5">5</option>
                        <option className="level-option" value="6">6</option>
                        <option className="level-option" value="7">7</option>
                        <option className="level-option" value="8">8</option>
                        <option className="level-option" value="9">9</option>
                        <option className="level-option" value="10">10</option>
                    </select>
                    <button className='submit-btn' onClick={() => handleClick(name, level)}>Play</button>
            </div>
        </div>
    </div> 

    )
}

Welcome.propTypes = {
    handleClick: PropTypes.func.isRequired,
  }


export default Welcome