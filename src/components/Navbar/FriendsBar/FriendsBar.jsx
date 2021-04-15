import React from 'react';

import s from './../Navbar.module.css';
import FriendsAvatars from './../FriendsAvatars/FriendsAvatars';

const FriendsBar = () => {
    const anonymousImage = 'https://icon-library.com/images/unknown-person-icon/unknown-person-icon-19.jpg';
    return (
        <div className={s.friends}>Friends Online
            <div className={s.avatarsContainer}>
                <FriendsAvatars image={anonymousImage}/>
                <FriendsAvatars image={anonymousImage}/>
                <FriendsAvatars image={anonymousImage}/>
            </div>
        </div>

    )
}

export default FriendsBar;