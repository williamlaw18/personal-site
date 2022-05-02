import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/header.scss';

const Header = () => {
    return (
        <header className='header'>

            <Link className="header__logo" to={'/'}>
                <span>🍐</span>
            </Link>

        </header>
    );
}

export default Header;
