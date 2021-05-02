import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';

import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.profileInfoContainer}>
            <div className={s.imageContainer}>
                <img className={s.avatar} alt="background" src='https://pbs.twimg.com/profile_images/783445386375507969/nTv88w7E_400x400.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                {/* <img src={props.profile.photos.large} alt="img"/> */}
                Jordan Peele
            </div>
        </div>
    );

}

export default ProfileInfo;