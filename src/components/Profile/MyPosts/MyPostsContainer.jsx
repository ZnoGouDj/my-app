import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer"
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';



const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            { (store) => {

                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }

                return <MyPosts updateNewPostText={onPostChange}
                    onAddPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                    image={state.profilePage.image} />
            }
            }
        </StoreContext.Consumer>
    )

}

export default MyPostsContainer;