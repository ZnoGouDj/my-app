import { rerenderEntireTree } from "../render";

let state = {
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
            { id: 1, name: "Marleen" },
            { id: 2, name: "STONE" },
            { id: 3, name: "jboyboy408@gmail.com" },
            { id: 4, name: "zloypenis" }
        ],
    },
    navbarPage: {
        avatars: [
            { id: 1, image: 'https://icon-library.com/images/unknown-person-icon/unknown-person-icon-19.jpg' },
            { id: 2, image: 'https://www.buro247.ua/thumb/670x960_0/local/images/buro/galleries/2018/03/new-name-optimus-gang-3.jpg' },
            { id: 3, image: 'https://www.vokrug.tv/pic/person/6/e/0/2/6e02e4d5202366442710552912e7a10f.jpg' },
            { id: 4, image: 'https://pbs.twimg.com/profile_images/980761782909272064/h-qrVrmY.jpg' },
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        post: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;