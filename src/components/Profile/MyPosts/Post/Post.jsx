import React from 'react';

import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div>
            <img alt="av" src="https://pbs.twimg.com/profile_images/783445386375507969/nTv88w7E_400x400.jpg" />
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