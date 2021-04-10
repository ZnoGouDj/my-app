import React from 'react';

import s from './../Navbar.module.css';
import FriendsAvatars from './../FriendsAvatars/FriendsAvatars';

const FriendsBar = (props) => {
    return (
        <div className={s.friends}>Friends Online
            <div className={s.avatarsContainer}>
                <FriendsAvatars image={props.sidebar.image}/>
                <FriendsAvatars image={props.sidebar.image}/>
                <FriendsAvatars image={props.sidebar.image}/>
            </div>
        </div>

    )
}

export default FriendsBar;