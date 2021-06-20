
import { useParams } from 'react-router-dom'

import styles from './Journal.module.css'

const Journal = ({user}) => {
    const id = user.id
    console.log(user)


    return (
        <>
            <div className={styles.journal}>
                <div className={styles.book}>

                </div>
            </div>
            <section>Your Journal!</section>
        </>
    )
}


export default Journal;