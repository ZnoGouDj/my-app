import React from 'react';

import s from './../Navbar.module.css';
import FriendsAvatars from './../FriendsAvatars/FriendsAvatars';

const FriendsBar = (props) => {

    const image = props.dialogsPage.image;

    return (
        <div className={s.friends}>Friends Online
            <div className={s.avatarsContainer}>
                <FriendsAvatars image={image}/>
                <FriendsAvatars image={image}/>
                <FriendsAvatars image={image}/>
            </div>
        </div>

    )
}

export default FriendsBar;