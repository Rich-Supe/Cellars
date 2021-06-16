import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import styles from '../WineCard/WinesCard.module.css'
// import { useHistory } from 'react-router-dom';
// import WineModal from '../WineModal'
import CellarModal from '../CellarModal'

const CellarCard = ({wine}) => {
    const [showModal, setShowModal] = useState(false);
    const handleOpenClose = (e) => {
        if (e.target.getAttribute('id') === 'modal-background') {
            setShowModal(!showModal);
        } else if (e.target.getAttribute('data') === 'anything') {
            setShowModal(!showModal);
        } 

    }
    return (
        //On clicking the card, should open wine modal
        <div id={wine.id} className={styles.wineCard} onClick={(e)=> handleOpenClose(e)} data='anything'>
        {showModal && (
            <Modal onClose={(e) => handleOpenClose(e)}>
                <CellarModal props={{wineId:wine.id, handleClose: handleOpenClose, reviews:wine.reviews}}/>
            </Modal>
            )}
            <img id={wine.id} src={wine.labelUrl} className={styles.wineImg} data="anything" alt="wine label"></img>
            <div className={styles.name}>
                <p>{wine.name}</p>
            </div>
        </div>
    )

}


export default CellarCard;
