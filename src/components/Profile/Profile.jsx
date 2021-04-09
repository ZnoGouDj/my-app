import React from 'react';

import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={s.profileContainer}>
            <ProfileInfo images={props.images}/>
            <MyPostsContainer store={props.store} />
        </div>
    );
}

export default Profile;