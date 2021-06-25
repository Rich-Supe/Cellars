
import Cellar from '../Cellar'
import Journal from '../Journal'
import ProfileLanding from '../ProfileLanding';
import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './Profile.module.css';
import { GiSecretBook, GiWoodenCrate } from 'react-icons/gi';

const ProfilePage = () => {
    const history = useHistory();
    const {id} = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const [ showCellar, setShowCellar ] = useState('false')
    let profile;
    
    if (showCellar === 'true'){
        profile = (
            <>
                <header className={styles.cellarHeader}>Your Cellar</header>
                <Cellar id={id} key={id}/>
            </>
        )
    }

    else {
        profile = (
            <>
                <header className={styles.journalHeader}>Your Profile</header>
                <ProfileLanding user={sessionUser}/>
            </>
        )
    }


    return (
            <div className={styles.profile}>
                <div className={styles.profile__nav}>
                    <div className={styles.profile__openCellar}>
                        <button className={styles.profile__openCellar_btn} onClick={(e) => setShowCellar("true")}>
                        <GiWoodenCrate />
                        </button>
                    </div>

                    <div className={styles.profile__openJournal}>
                        <button className={styles.profile__openJournal_btn} onClick={(e) => history.push(`/journal`)}>
                        <GiSecretBook />
                        </button>
                    </div>
                </div>
                {profile}
            </div>
    )
}

export default ProfilePage;