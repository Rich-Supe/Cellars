import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import { Modal } from '../../context/Modal';
import styles from './WinesCard.module.css'
// import { useHistory } from 'react-router-dom';
import WineModal from '../WineModal'

const WinesCard = ({wine}) => {
    const [showModal, setShowModal] = useState(false);
    const reviews = wine.reviews?wine.reviews:wine.Reviews
    // const profile = useParams()
    let cellarBtn;

    // console.log(wine.id)

    const handleOpenClose = (e) => {
        if (e.target.getAttribute('id') === 'modal-background') {
            setShowModal(!showModal);
        } else if (e.target.getAttribute('data') === 'anything') {
            setShowModal(!showModal);
        } 
    }

    // if (profile.id) {
    //     cellarBtn = (
    //         <div className={styles.removeFromCellar} onClick={handleRemove}>
    //             <i class="fas fa-trash-alt"></i>
    //         </div>
    //     )
    // } else {
    //     cellarBtn = (
    //         <>
    //         </>
    //     )
    // }

    
    return (
        //On clicking the card, should open wine modal
        <div id={wine.id} className={styles.wineCard} onClick={(e)=> handleOpenClose(e)} data='anything'>
        {showModal && (
            <Modal onClose={(e) => handleOpenClose(e)}>
                <WineModal props={{wineId:wine.id, handleClose: handleOpenClose, reviews: reviews}}/>
            </Modal>
            )}
            {/* <div> */}
            <img id={wine.id} src={wine.labelUrl} className={styles.wineImg} data="anything" alt="wine label"></img>
            {/* </div> */}
            <div className={styles.name}>
                <p>{wine.name}</p>
            </div>
            {cellarBtn}
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