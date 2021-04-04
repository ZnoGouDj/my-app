import React from 'react';

import s from './../Navbar.module.css';

const FriendsAvatars = () => {

    let unknownUserLogo = 'https://icon-library.com/images/unknown-person-icon/unknown-person-icon-19.jpg';

    return (
        <div className={s.friendsAvatar}>
            <img className={s.avatar} src={unknownUserLogo} alt="logo"/>
        </div>
    )
}

export default FriendsAvatars;