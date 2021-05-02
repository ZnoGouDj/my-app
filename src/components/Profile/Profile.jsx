import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div className={s.profileContainer}>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;