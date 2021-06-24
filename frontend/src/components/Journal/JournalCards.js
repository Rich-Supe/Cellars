

import styles from './Journal.module.css'

const JournalCards = ({entry}) => {
    // const wines = props[0];
    // const entries = props[1];

    // console.log(`card wines:`, wines)
    // console.log(`card entries`, entries)

    return (
        <div className={styles.card}>
            <p className={styles.card__entry}>{entry.entry}</p>
        </div>
    )
}

export default JournalCards;