import React from 'react';

import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialogs + ' ' + s.active}>
            <div className={s.imageContainer}>
                <img className={s.senderAvatar} src={props.image} alt="logo" />
            </div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;