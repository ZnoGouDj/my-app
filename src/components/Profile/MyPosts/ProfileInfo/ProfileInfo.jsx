import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.profileInfoContainer}>
            { props.profile.photos.large ? <div className={s.descriptionBlock}>
                <img className={s.avatar} src={props.profile.photos.large} alt="img" />
                <div>{props.profile.fullName}</div>
            </div> : <div className={s.descriptionBlock}>
                <img className={s.avatar} alt="background" src='https://pbs.twimg.com/profile_images/783445386375507969/nTv88w7E_400x400.jpg' />Jordan Peele
            </div>}
            <ProfileStatus status="Sup fellas"/>
        </div>
    );

}

export default ProfileInfo;