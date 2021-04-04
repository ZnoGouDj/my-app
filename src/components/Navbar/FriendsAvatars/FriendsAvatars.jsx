import React from 'react';

import s from './../Navbar.module.css';

const FriendsAvatars = () => {

    let unknownUserLogo = 'https://icon-library.com/images/unknown-person-icon/unknown-person-icon-19.jpg';
    let bogdanLogo = 'https://www.buro247.ua/thumb/670x960_0/local/images/buro/galleries/2018/03/new-name-optimus-gang-3.jpg';
    let vladimirLogo = 'https://www.vokrug.tv/pic/person/6/e/0/2/6e02e4d5202366442710552912e7a10f.jpg';
    let alexeyLogo = 'https://pbs.twimg.com/profile_images/980761782909272064/h-qrVrmY.jpg';

    return (
        <div className={s.friendsAvatar}>
            <img className={s.avatar} src={unknownUserLogo} alt="logo"/>
        </div>
    )
}

export default FriendsAvatars;