import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../assets/images/user.png'

import ProfileStatusWithHook from './ProfileStatusWithHook';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {

        props.savePhoto(e.target.files[0]);

    }

    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} />
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected} />}
                    <ProfileData/>
                <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )


}

const ProfileData = () => {
    return <div>
        <div><b>Users</b>: {props.profile.userId}</div>
        <div><b>lookingForAJob</b>: {props.profile.lookingForAJob}</div>
        <div><b>lookingForAJobDescription</b>: {props.profile.lookingForAJobDescription}</div>
        <div><b>fullName</b>: {props.profile.fullName}</div>
        <div><b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key} ContactTitle={key} ContactValue={props.profile.contacts[key]} />
        })}</div>
    </div>
}

const Contact = ({ ContactTitle, ContactValue }) => {
    return <div><b>{ContactTitle}</b>: {ContactValue} </div>
}
export default ProfileInfo;