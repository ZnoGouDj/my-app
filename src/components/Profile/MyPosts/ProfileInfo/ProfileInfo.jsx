import React from 'react';

import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profileInfoContainer}>
            <div className={s.imageContainer}>
                <img className={s.avatar} alt="background" src="https://pbs.twimg.com/profile_images/783445386375507969/nTv88w7E_400x400.jpg"></img>
            </div>
            <div className={s.descriptionBlock}>
                Jordan Peele
            </div>
        </div>
    );
}

export default ProfileInfo;