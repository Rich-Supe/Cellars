
import Cellar from '../Cellar'
import Journal from '../Journal'
import ProfileLanding from '../ProfileLanding';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './Profile.module.css';

const ProfilePage = () => {
    const {id} = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const [ showCellar, setShowCellar ] = useState('false')
    const [ showJournal, setShowJournal ] = useState('false')
    let profile;

    if (showCellar === 'true'){
        profile = (
            <>
                <header className={styles.cellarHeader}>Your Cellar</header>
                <Cellar id={id} key={id}/>
            </>
        )
    }

    else if (showJournal === 'true'){
        profile = (
            <>
                <header className={styles.journalHeader}>Your Journal</header>
                <Journal user={sessionUser} />
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

    // useEffect(() => {
    // }, [showCellar, showJournal])


    return (
            <div className={styles.profile}>
                <div className={styles.profile__nav}>
                    <div className={styles.profile__openCellar}>
                        <button className={styles.profile__openCellar_btn} onClick={(e) => setShowCellar("true")}>
                        <i className="fas fa-box-open"></i>
                        </button>
                    </div>

                    <div className={styles.profile__openJournal}>
                        <button className={styles.profile__openJournal_btn} onClick={(e) => setShowJournal("true")}>
                        <i className="fas fa-book-open"></i>
                        </button>
                    </div>
                </div>
                {profile}
                {/* <div>
                    <header className={styles.cellarHeader}>Your Cellar</header>
                    <Cellar id={id} key={id}/>
                </div> */}
                {/* <div>
                <i className="fas fa-book-open"></i>
                <i className="fas fa-box-open"></i>
                </div> */}
            </div>
    )
}

export default ProfilePage;