import React from 'react';

import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} image={state.image}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} image={state.image}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogsContainer}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
            <div className={s.textInput}>
                <form>
                    <textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder="Your message here"></textarea>
                    <button onClick={onSendMessageClick}>Send</button>
                </form>
            </div>
        </div>

    )
}

export default Dialogs;