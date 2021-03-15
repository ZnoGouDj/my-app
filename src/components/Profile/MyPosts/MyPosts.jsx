import React from 'react';

import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post likesCount="125" message="Not a spoon, not a fork, but something in between." />
                <Post likesCount="225" message="I LOVE BEING IN CONTINENT!" />
                <Post likesCount="135" message="I HAVE WHAT I'M HAVING!" />
            </div>
        </div>
    );
}

export default MyPosts;