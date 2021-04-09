const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: "sup, any loaylty gift?" },
        { id: 2, message: "One moment, please, let me check your account." },
        { id: 3, message: "hope you're having a great day!" },
        { id: 4, message: "Unfortunately we can't offer anything now." },
        { id: 5, message: "WTF?!" },
    ],
    dialogs: [
        { id: 1, name: "Marleen Koster" },
        { id: 2, name: "STONE" },
        { id: 3, name: "jboyboy408@gmail.com" },
        { id: 4, name: "Владислав Жирков" }
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
        switch(action.type) {
            case UPDATE_NEW_MESSAGE_BODY:
                state.newMessageBody = action.body;
                return state;
            case SEND_MESSAGE:
                let body = state.newMessageBody;
                state.newMessageBody = '';
                state.messages.push({id: 6, message: body});
                return state;
            default:
                return state;
        }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;