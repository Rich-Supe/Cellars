
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {getOneWine} from '../../store/wines'
import ReviewsBox from '../ReviewsBox'

// import winesReducer, {getOneWine} from '../../store/wines'
import styles from './WineModal.module.css'

const WineModal = ({props}) => {
    const dispatch = useDispatch()
    // const { id } = useParams();
    const id = props.wineId
    const reviews = props.reviews
    const wines = useSelector((state) => state.wines)
    
    useEffect(() => {
        dispatch(getOneWine(id));
    }, [dispatch]);
    
    const wine = wines[id];
    if (!wine) return null;

    console.log(`wines:`, wines)
    console.log("wine:", wine)
    console.log(`Reviews:`, reviews)
    
    return (
        <div className={styles.wineModal}>
            <header className={styles.header}>
                <p>{wine.name}</p>
            </header>
            <div className={styles.wineDiv}>
                <div className={styles.wineImgDiv}>
                    <img id={wine.id} src={wine.labelUrl} className={styles.wineImg}></img>
                </div>
                <div className={styles.wineInfo}>
                    <ul>
                        <p>Rating: {wine.rating}</p>
                        <p>Country: {wine.country}</p>
                        <p>Region: {wine.region}</p>
                        <p>Year: {wine.year}</p>
                        <p>Color: {wine.color}</p>
                        <p>Grape: {wine.grape}</p>
                        <p>Price: ${wine.price}.00</p>
                    </ul>
                </div>
            </div>
            <Reviews props={{wine, reviews}}}/>
            {/* <div className={styles.reviews}>
                <header className={styles.reviewHeader}>Reviews</header>
                <div className={styles.reviewBox}>
                {reviews?.map((review) => <p>{review.review}</p>)}
                </div>
                <div className={styles.footer}>
                    <button className={styles.submitBtn}>Leave a review</button>
                </div>
            </div> */}
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