import React from 'react';

import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        { id: 1, post: "Not a spoon, not a fork, but something in between.", likesCount: "125" },
        { id: 2, post: "I LOVE BEING IN CONTINENT!", likesCount: "225" },
        { id: 3, post: "I HAVE WHAT I'M HAVING!", likesCount: "135" },
    ]

    let postsElements = posts.map(p => <Post likesCount={p.likesCount} message={p.post} />)

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
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;