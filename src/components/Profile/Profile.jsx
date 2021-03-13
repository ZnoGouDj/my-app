import React from 'react';

import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img alt="background" src="https://compote.slate.com/images/98079093-8945-48f4-b768-2d23140275f0.jpg?width=1600"></img>
            </div>

            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;