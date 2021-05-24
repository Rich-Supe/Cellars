import styles from './WinesCard.module.css'

const WinesCard = ({wine}) => {
    
    return (
        <div id={wine.id} className={styles.wineCard}>
            <img id={wine.id} src={wine.labelUrl} className={styles.wineImg}></img>
            <p>{wine.name}</p>
            {/* <p>{wine.year}</p> */}
        </div>
    )

}


export default WinesCard;