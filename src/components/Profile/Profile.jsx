import React from 'react';

import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={s.profileContainer}>
            <ProfileInfo images={props.images}/>
            <MyPosts posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
                images={props.images} />
        </div>
    );
}

export default Profile;