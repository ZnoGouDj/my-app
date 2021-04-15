const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, post: "Not a spoon, not a fork, but something in between.", likesCount: "125" },
        { id: 2, post: "I LOVE BEING IN CONTINENT!", likesCount: "225" },
        { id: 3, post: "I HAVE WHAT I'M HAVING!", likesCount: "135" },
    ],
    newPostText: 'it-kamasutra.com',
    image: 'https://pbs.twimg.com/profile_images/783445386375507969/nTv88w7E_400x400.jpg'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;