import React from 'react';

import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfoContainer}>
            <div className={s.imageContainer}>
                <img className={s.avatar} alt="background" src={props.image}></img>
            </div>
            <div className={s.descriptionBlock}>
                Jordan Peele
            </div>
        </div>
    );
}

export default ProfileInfo;