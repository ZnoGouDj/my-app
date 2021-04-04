import React from 'react';

import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} image={props.images.avatars[1].image} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} image={props.images.avatars[1].image}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
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
                    <textarea placeholder="Your message here" ref={newMessageElement}></textarea>
                    <button onClick={addMessage}>Send</button>
                </form>
            </div>
        </div>

    )
}

export default Dialogs;