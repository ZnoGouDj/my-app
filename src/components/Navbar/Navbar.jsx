import React from 'react';

import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import FriendsBar from './FriendsBar/FriendsBar';


const Navbar = (props) => {

    let state = props.store.getState().sidebar.avatars[1];

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <FriendsBar sidebar={state}/>
        </nav>
    );
}

export default Navbar;