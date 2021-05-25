import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import styles from './WinesCard.module.css'
// import { useHistory } from 'react-router-dom';
import WineModal from '../WineModal'


const WinesCard = ({wine}) => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        //On clicking the card, should open wine modal
        <div id={wine.id} className={styles.wineCard} onClick={()=> setShowModal(true)}>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <WineModal wineId={wine.id}/>
            </Modal>
            )}
            <img id={wine.id} src={wine.labelUrl} className={styles.wineImg}></img>
            <div className={styles.name}>
                <p>{wine.name}</p>
            </div>
        </div>
    )

}


export default WinesCard;














// import styles from './WinesCard.module.css'
// import { useHistory } from 'react-router-dom';

// const WinesCard = ({wine}) => {
//     const history = useHistory();
    
//     return (
//         //On clicking the card, should open wine modal
//         <div id={wine.id} className={styles.wineCard} onClick={() => history.push(`/wine/${wine.id}`)}>
//             <img id={wine.id} src={wine.labelUrl} className={styles.wineImg}></img>
//             <div className={styles.name}>
//                 <p>{wine.name}</p>
//             </div>
//         </div>
//     )

// }


// export default WinesCard;