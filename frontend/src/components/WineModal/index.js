
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'
// import { Modal } from '../../context/Modal';
import {getOneWine} from '../../store/wines'
import ReviewsBox from '../ReviewsBox'
// import WriteReview from '../WriteReview'
import WriteReview from '../WriteReview';

// import winesReducer, {getOneWine} from '../../store/wines'
import styles from './WineModal.module.css'

//Carousel imports

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination])

const WineModal = ({props}) => {
    // const [currentCard, setCurrentCard] = useState();
    // const [showModal, setShowModal] = useState(false);
    const [showReview, setShowReview] = useState(false)

    const dispatch = useDispatch()
    const id = props.wineId
    const reviews = props.reviews
    const wines = useSelector((state) => state.wines)
    // console.log(`REVIEWS..????????`, reviews)

    useEffect(() => {
        dispatch(getOneWine(id));
    }, [dispatch]);
    
    const wine = wines[id];
    if (!wine) return null;

    //Reviews Carousel:
    const slides = [];
    let i = 0
    // console.log(`REVIEWS FROM REVIEWSBOX/WINEMODEL`, reviews)
    if(reviews){
        reviews.forEach((review) => {
            slides.push(
                <SwiperSlide key={`slide-${i}`}>
                    <ReviewsBox props={{review}}/>
                </SwiperSlide>
            )
            i++
        })
    }

        if (showReview) {return (
        <div className={styles.wineModal}>
        <header className={styles.header}>
            <p>{wine.name}</p>
        </header>
        <div className={styles.wineDiv}>
            <div className={styles.wineImgDiv}>
                <img id={wine.id} src={wine.labelUrl} className={styles.wineImg} alt="wine label"></img>
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
        <WriteReview props={{wine, setShowReview}}/>
        </div>

        )} else if (!showReview)  {return  (

        <div className={styles.wineModal}>
            <header className={styles.header}>
                <p>{wine.name}</p>
            </header>
            <div className={styles.wineDiv}>
                <div className={styles.wineImgDiv}>
                    <img id={wine.id} src={wine.labelUrl} className={styles.wineImg} alt="wine label"></img>
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
                <header className={styles.reviewHeader}>What others are saying:</header>
                    <div className={styles.reviews}>
                        <div className={styles.reviewBox}>
                        {/* {reviews?.map((review) => <ReviewsBox key={review.id} props={{review}}/>)} */}
                        <Swiper id="main" 
                            tag="section" 
                            wrapperTag="ul" 
                            navigation 
                            pagination 
                            spaceBetween={0} 
                            slidesPerView={1}
                            // onInit={(swiper) => console.log('Swiper initialized', swiper)}
                            // onSlideChange={(swiper) => {
                            //     console.log('Swiper slide: ', swiper)
                            // }}
                            // onReachEnd={() => console.log("Swiper end")}
                        >{slides}</Swiper>
                        </div>
                    </div>
        <footer className={styles.footer}>
            {/* <form onSubmit={formSubmit}> */}
            <button className={styles.footerP}
                type="button" 
                onClick={()=> 
                {setShowReview(!showReview)}}
                >Tell others how you feel! Click here to write your own review.</button>
            {/* </form> */}
        </footer>
        </div>
        )}
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