
import Cellar from '../Cellar'
import { useParams } from 'react-router-dom'

import styles from './Profile.module.css';
import background from '../../assets/images/winecellar3.jpg'


const ProfilePage = () => {
    const { id } = useParams();

    return (
            <div className={styles.profile}>
                <div className={styles.bkg}>
                    <header className={styles.cellarHeader}>Your Cellar</header>
                    <Cellar id={id} key={id}/>
                </div>
            </div>
    )
}

export default ProfilePage;