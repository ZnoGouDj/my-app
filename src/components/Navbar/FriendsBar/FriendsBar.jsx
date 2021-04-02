import React from 'react';

import s from './../Navbar.module.css';
import FriendsAvatars from './../FriendsAvatars/FriendsAvatars';

const FriendsBar = () => {
    return (
        <div className={s.friends}>Friends Online
            <div className={s.avatarsContainer}>
                <FriendsAvatars />
                <FriendsAvatars />
                <FriendsAvatars />
            </div>
        </div>

    )
}

export default FriendsBar;