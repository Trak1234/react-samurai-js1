import React from 'react';
import s from './ProfileInfo.module.css';
import shapka from '../../images/Diagram.jpg';
import ava from '../../images/ava.jpg';


const ProfileInfo = () => {
    return (
        <div className={s.body}>
            <div>
                <img class={s.shapka}
                    src={shapka}/>
            </div>

            <div className={s.descriptionBlock}>
                <img  src={ava} className={s.ava} />
            </div>

            <div className={s.namePeople}>Какой-то человек</div>
            <button className={s.profileredaction}>Редактировать профиль</button>
        </div>
    )
}

export default ProfileInfo;