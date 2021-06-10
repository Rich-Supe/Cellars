
import Cellar from '../Cellar'
import styles from './Profile.module.css';
import { useParams } from 'react-router-dom'


const ProfilePage = () => {
    const { id } = useParams();

    return (
        <div className={styles.profile}>
            <Cellar id={id} key={id}/>
        </div>
    )
}

export default ProfilePage;