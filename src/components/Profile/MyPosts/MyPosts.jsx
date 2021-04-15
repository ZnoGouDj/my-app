import React from 'react';

import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => { 
    let postsElements = 
    props.profilePage.posts.map(p => <Post likesCount={p.likesCount} message={p.post} image={props.image}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            {/* <h3>My Posts</h3> */}
            <form>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                    <button onClick={onAddPost}>Add</button>
            </form>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;