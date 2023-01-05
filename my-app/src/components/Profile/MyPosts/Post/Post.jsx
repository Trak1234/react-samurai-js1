import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://krot.info/uploads/posts/2022-03/1646184342_26-krot-info-p-koti-v-ochkakh-memi-smeshnie-foto-30.jpg' />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;