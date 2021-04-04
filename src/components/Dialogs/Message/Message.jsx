import React from 'react';

import s from './../Dialogs.module.css';

const Message = (props) => {

    let unknownUserLogo = 'https://icon-library.com/images/unknown-person-icon/unknown-person-icon-19.jpg';

    return (
        <div className={s.message}>
            <div className={s.dialogImageContainer}>
                <img className={s.dialogImage} src={unknownUserLogo} alt="logo" />
            </div>
            <div>
                {props.message}
            </div>
        </div>
    )

}

export default Message;