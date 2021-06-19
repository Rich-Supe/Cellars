
import { useParams } from 'react-router-dom'

import styles from './Journal.module.css'

const Journal = ({user}) => {
    const id = user.id
    console.log(user)


    return (
        <>
            <section>Your Journal!</section>
        </>
    )
}


export default Journal;