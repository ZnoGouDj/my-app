import React from 'react';

import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = () => {

    return (
        <div className={s.profileContainer}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;