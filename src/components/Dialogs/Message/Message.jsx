import React from 'react';

import s from './../Dialogs.module.css';

const Message = (props) => {

    return (
        <div className={s.message}>
            <div className={s.dialogImageContainer}>
                <img className={s.dialogImage} src={props.image} alt="logo" />
            </div>
            <div>
                {props.message}
            </div>
        </div>
    )

}

export default Message;