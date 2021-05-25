
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {getOneWine} from '../../store/wines'

// import winesReducer, {getOneWine} from '../../store/wines'
import styles from './WineModal.module.css'

const WineModal = ({wineId}) => {
    const dispatch = useDispatch()
    // const { id } = useParams();
    const id = wineId
    console.log('_____-------', id)
    const wines = useSelector((state) => state.wines)
    
    useEffect(() => {
        dispatch(getOneWine(id));
    }, [dispatch]);
    
    const wine = wines[id];
    if (!wine) return null;

    console.log(wine)
    
    return (
        <div className={styles.wineModal}>
            <div className={styles.wineImgDiv}>
            <img id={wine.id} src={wine.labelUrl} className={styles.wineImg}></img>
            </div>
            <div className={styles.name}>
                <p>{wine.name}</p>
            </div>
            <div className={styles.wineInfo}>
                <ul>
                    <p>Rating: {wine.rating}</p>
                    <p>Country: {wine.country}</p>
                    <p>Region: {wine.region}</p>
                    <p>Year: {wine.year}</p>
                    <p>Color: {wine.color}</p>
                    <p>Grape: {wine.grape}</p>
                    <p>Price: {wine.price}</p>
                </ul>
            </div>
        
        </div>
    )

}


export default WineModal;


















// import React, { useState } from 'react';
// import { Modal } from '../../context/Modal';

// import WineModalComponent from './WineModel'

// function WineModal() {
//     const [showModal, setShowModal] = useState(false);

//     return (
//         <>
//             {/* click event here, onClick={() => setShowModal(true)} */}
//             {showModal && (
//             <Modal onClose={() => setShowModal(false)}>
//                 <WineModalComponent />
//             </Modal>
//             )}
//         </>
//     )
// }

// export default WineModal;