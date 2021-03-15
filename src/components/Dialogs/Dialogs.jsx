import React from 'react';

import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>
        {props.message}
    </div>

}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Bogdan" id="1" />
                <DialogItem name="Vladimir" id="2" />
                <DialogItem name="Alexey" id="3" />
                <DialogItem name="Alexandr" id="4" />
            </div>
            <div className={s.messages}>
                <Message message="Bodyaaaaa!" />
                <Message message="I'm wide" />
                <Message message="I'm in prison" />
            </div>
        </div>
    )
}

export default Dialogs;