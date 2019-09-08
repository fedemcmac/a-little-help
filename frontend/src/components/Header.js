import React from 'react';
import { Link } from 'react-router-dom'

const Header = ({ title }) => {
    return(
        <div className="blueHeader">
            <h2 className="bigAndWhite">{title}</h2>
        </div>
    )
}

export default Header