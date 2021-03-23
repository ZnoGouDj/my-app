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

    let dialogs = [
        { id: 1, name: "Bogdan" },
        { id: 2, name: "Vladimir" },
        { id: 3, name: "Alexey" },
        { id: 4, name: "Alexandr" }
    ]

    let messages = [
        { id: 1, message: "Bodyaaaaa!" },
        { id: 2, message: "I'm wide" },
        { id: 3, message: "I'm in prison" },
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;