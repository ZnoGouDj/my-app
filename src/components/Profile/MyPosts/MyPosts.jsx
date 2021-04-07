import React from 'react';

import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer"



const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post likesCount={p.likesCount} message={p.post} images={props.images}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            {/* <h3>My Posts</h3> */}
            <form>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                    <button onClick={addPost}>Add</button>
            </form>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;