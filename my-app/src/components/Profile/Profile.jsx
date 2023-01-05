import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.body}>
            <ProfileInfo />
          
            <MyPostsContainer />
        </div>
    )
}

export default Profile;