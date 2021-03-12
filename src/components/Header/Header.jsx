import React from 'react';

import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img alt="logo" src="https://www.emmys.com/sites/default/files/styles/show_detail/public/key-and-peele-600x600.jpg?itok=uoSkVBzn" />
        </header>
    );
}

export default Header;