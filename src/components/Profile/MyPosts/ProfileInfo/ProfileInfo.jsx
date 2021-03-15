import React from 'react';

import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img alt="background" src="https://compote.slate.com/images/98079093-8945-48f4-b768-2d23140275f0.jpg?width=1600"></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;