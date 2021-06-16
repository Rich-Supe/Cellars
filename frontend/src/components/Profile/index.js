
import Cellar from '../Cellar'
import { useParams } from 'react-router-dom'
import { useState } from 'react';

import styles from './Profile.module.css';

const ProfilePage = () => {
    const { id } = useParams();
    const { showCellar, setShowCellar} = useState('')
    const { showJournal, setShowJournal} = useState('')

    // if (showCellar){

    // }
    return (
            <div className={styles.profile}>
        
                <div>
                    <header className={styles.cellarHeader}>Your Cellar</header>
                    <Cellar id={id} key={id}/>
                </div>
                {/* <div>
                <i className="fas fa-book-open"></i>
                <i class="fas fa-box-open"></i>
                </div> */}
            </div>
    )
}

export default ProfilePage;