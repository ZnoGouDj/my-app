import React from 'react';

import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img alt="av" src="http://rackjite.com/wp-content/uploads/c114-KPBreakfast.jpg" />
                    {props.message}
            <div>
                <span>{props.likesCount} likes</span>
            </div>
        </div>
    );
}

export default Post;