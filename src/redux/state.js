import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'

export let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, post: "Not a spoon, not a fork, but something in between.", likesCount: "125" },
                { id: 2, post: "I LOVE BEING IN CONTINENT!", likesCount: "225" },
                { id: 3, post: "I HAVE WHAT I'M HAVING!", likesCount: "135" },
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
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
        },
        imagesCollection: {
            avatars: [
                { id: 1, image: 'https://pbs.twimg.com/profile_images/783445386375507969/nTv88w7E_400x400.jpg' },
                { id: 2, image: 'https://icon-library.com/images/unknown-person-icon/unknown-person-icon-19.jpg' },
                { id: 3, image: 'https://www.buro247.ua/thumb/670x960_0/local/images/buro/galleries/2018/03/new-name-optimus-gang-3.jpg' },
                { id: 4, image: 'https://www.vokrug.tv/pic/person/6/e/0/2/6e02e4d5202366442710552912e7a10f.jpg' },
                { id: 5, image: 'https://pbs.twimg.com/profile_images/980761782909272064/h-qrVrmY.jpg' },
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _addPost() {
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;