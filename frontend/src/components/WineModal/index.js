
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'
// import { Modal } from '../../context/Modal';
import {getOneWine} from '../../store/wines'
import ReviewsBox from '../ReviewsBox'
// import WriteReview from '../WriteReview'
import WriteReviewModal from '../WriteReviewModal';

// import winesReducer, {getOneWine} from '../../store/wines'
import styles from './WineModal.module.css'

const WineModal = ({props}) => {
    // const [currentCard, setCurrentCard] = useState();
    // const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch()
    const id = props.wineId
    const reviews = props.reviews
    const wines = useSelector((state) => state.wines)
    
    useEffect(() => {
        dispatch(getOneWine(id));
    }, [dispatch]);
    
    const wine = wines[id];
    if (!wine) return null;

    // const handleClose = () => {
    //     setShowModal(false);
    // }

    // console.log('Is the Review Modal showing?', showModal)

//needed to avoid object error
    // const compProps = {
    //     Review: reviews
    // }

    // console.log(`Reviews from wineModal:`, reviews)
    
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
                <div className={styles.headerDiv}>
                <header className={styles.reviewHeader}>What others are saying:</header>
                </div>
            <div className={styles.reviews}>
                <div className={styles.reviewBox}>
                {reviews?.map((review) => <ReviewsBox key={review.id} props={{review}}/>)}
                </div>
            </div>
            <footer className={styles.footer}>
                <WriteReviewModal props={wines}/>
                {/* <button className={styles.footerP} onClick={()=> setShowModal(true)}>Tell others how you feel! Click here to write your own review.
                </button>
                {showModal && (
                    <Modal onClose={() => handleClose()}>
                        <WriteReview props={wine}/>
                    </Modal>
                )} */}
                {/* <button className={styles.addReviewBtn}>Add a Review</button> */}
            </footer>
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