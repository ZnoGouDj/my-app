import React from 'react';

import s from './../Navbar.module.css';

const FriendsAvatars = (props) => {
    return (
        <div className={s.friendsAvatar}>
            <img className={s.avatar} src={props.image} alt="logo"/>
        </div>
    )
}

export default FriendsAvatars;