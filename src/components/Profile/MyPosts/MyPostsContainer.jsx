import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer"
import {connect} from "react-redux";
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        newPostText: state.profilePage.newPostText,
        image: state.profilePage.image
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;