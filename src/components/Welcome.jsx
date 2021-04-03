import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../css/Welcome.css'


const Welcome = ({handleClick}) => {
    const [name, setName] = useState('');

    return(
    <div className="Welcom">  
        <div className="welcome-page">
            <p><span>Please enter your name</span></p>
            <input id="name" className="name-input" onChange={e => setName(e.target.value)}></input>
            <button className='submit-btn' onClick={() => handleClick(name)}>Play</button>
        </div>
    </div> 

    )
}

Welcome.propTypes = {
    handleClick: PropTypes.func.isRequired,
  }


export default Welcome