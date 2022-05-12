import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/header.scss';

const Header = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => (window.pageYOffset > 10) ? setScrolled(true) : setScrolled(false);

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`header scrolled-${scrolled}`}>
            <Link className="header__logo" to={'/'}>
                <span>w!ll</span>
            </Link>

        </header>
    );
}

export default Header;
