import React from 'react';

const Header = ({ title }) => {
    return(
        <div className="blueHeader">
            <h2 className="bigAndWhite">{title}</h2>
        </div>
    )
}

export default Header