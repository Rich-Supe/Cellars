
import { useParams } from 'react-router-dom'

import JournalForm from '../JournalForm'

import styles from './Journal.module.css'

const Journal = () => {
    const id = useParams();

    return (
        <>
            <header>YOUR JOURNAL</header>
            <div className={styles.journal}>
                <div className={styles.journal__newEntry}>
                    {/* <JournalForm/> */}
                    <button className={styles.journal__newEntry_btn}>
                        Create a new entry
                        <i className="fas fa-pencil-alt"></i>
                    </button>
                </div>
                <div className={styles.journal__editEntry}>
                    {/* <JournalForm/> */}
                    <button className={styles.journal__editEntry_btn}>
                        Edit an older entry
                        <i className="fas fa-edit"></i>
                    </button>
                </div>
            </div>
        </>
    )
}


export default Journal;