import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer"
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {
    
    let state = props.store.getState().profilePage;
    
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }
    
    return <MyPosts updateNewPostText={onPostChange}
        onAddPost={addPost}
        posts={state.posts}
        newPostText={state.newPostText}
        image={state.image}
        />;
}

export default MyPostsContainer;