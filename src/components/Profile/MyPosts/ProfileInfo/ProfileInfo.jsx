import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';

import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    console.log(props)
    return (
        <div className={s.profileInfoContainer}>
            { props.profile.photos.large ? <div className={s.descriptionBlock}>
                <img className={s.avatar} src={props.profile.photos.large} alt="img" />
                <div>{props.profile.fullName}</div>
            </div> : <div className={s.descriptionBlock}>
                <img className={s.avatar} alt="background" src='https://pbs.twimg.com/profile_images/783445386375507969/nTv88w7E_400x400.jpg' />Jordan Peele
            </div>}
        </div>
    );

}

export default ProfileInfo;