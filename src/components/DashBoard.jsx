import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../css/Dashboard.css'


const Dashboard = ({handleClick}) => {
    const [name, setName] = useState('');

    return(
        <div className="dashboard">

            <div className={`welcome-message`}>
                <span className="win-message">
                    <p><span className="welcome-text">Welcome to my Hangman Game</span></p>
                    <p><span>Please enter your name</span></p>
                    <input id="name" className="name-input" onChange={e => setName(e.target.value)}></input>
                    <button className='submit-btn' onClick={() => handleClick(name)}>Play</button>
                </span>
            </div>

        </div>

    )
}

Welcome.propTypes = {
    handleClick: PropTypes.func.isRequired,
  }


export default Dashboard