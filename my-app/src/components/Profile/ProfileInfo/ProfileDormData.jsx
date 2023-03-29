import React from 'react';


const ProfileDataForm = () => {
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

export default ProfileDataForm;