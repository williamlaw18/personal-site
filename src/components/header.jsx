import React from 'react';

import '../styles/components/header.scss';

const Header = () => {
    return (
        <header className='header'>

            <div className="header__container pagecontainer">
                <h1 className='header__title'>Will Law</h1>
                <h2 className="header__subtitle">Web Developer & IT Enthusiast</h2>
                <p className="header__tagline">📍 Ulverston, Cumbria, United Kingdom</p>
            </div>

        </header>
    );
}

export default Header;
