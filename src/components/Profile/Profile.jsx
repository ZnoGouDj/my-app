import React from 'react';

import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = (props) => {

    let state = props.store.getState().profilePage;

    return (
        <div className={s.profileContainer}>
            <ProfileInfo image={state.image}/>
            <MyPostsContainer store={props.store} />
        </div>
    );
}

export default Profile;