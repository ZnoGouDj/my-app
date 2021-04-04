import React from 'react';

import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div>
            <img alt="av" src={props.images.avatars[0].image} />
            </div>
            <div className={s.messageContent}>
                <div>
                    {props.message}
                </div>
                <div>
                    <span>{props.likesCount} likes</span>
                </div>
            </div>           
        </div>
    );
}

export default Post;