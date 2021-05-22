import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img alt="logo" src="https://www.emmys.com/sites/default/files/styles/show_detail/public/key-and-peele-600x600.jpg?itok=uoSkVBzn" />

            <div className={s.loginBlock}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    );
}

export default Header;

