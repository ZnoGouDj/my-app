import React from 'react';
import StoreContext from '../../../../StoreContext';

import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

    return <StoreContext.Consumer>
        {store => {
            return (
                <div className={s.profileInfoContainer}>
                    <div className={s.imageContainer}>
                        <img className={s.avatar} alt="background" src={store.getState().profilePage.image}></img>
                    </div>
                    <div className={s.descriptionBlock}>
                        Jordan Peele
            </div>
                </div>
            );
        }
        }
    </StoreContext.Consumer>
}

export default ProfileInfo;