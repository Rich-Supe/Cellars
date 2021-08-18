
import Cellar from '../Cellar'
// import Journal from '../Journal'
import ProfileLanding from '../ProfileLanding';
import { useParams, useHistory } from 'react-router-dom'
import { useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './Profile.module.css';
import { GiSecretBook, GiWoodenCrate } from 'react-icons/gi';
import { FiArrowRight } from 'react-icons/fi'

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
                {/* <header className={styles.journalHeader}>Your Profile</header> */}
                <ProfileLanding user={sessionUser}/>
            </>
        )
    }


    return (
            <div className={styles.profile}>
                <div className={styles.profile__nav}>
                    <div className={styles.profile__openCellar}>
                    <p className={styles.openHeader}>Open Cellar</p>
                        <button className={styles.profile__openCellar_btn} onClick={(e) => setShowCellar("true")}>
                        <FiArrowRight className={styles.arrow}/>
                        <GiWoodenCrate />
                        </button>
                    </div>

                    <div className={styles.profile__openJournal}>
                        <p className={styles.openHeader}>Open Journal</p>
                        <button className={styles.profile__openJournal_btn} onClick={(e) => history.push(`/journal`)}>
                        <FiArrowRight className={styles.arrow}/>
                        <GiSecretBook />
                        </button>
                    </div>
                </div>
                {profile}
            </div>
    )
}

export default ProfilePage;