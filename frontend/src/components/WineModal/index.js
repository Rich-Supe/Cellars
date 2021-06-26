
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react'
// import { Modal } from '../../context/Modal';
import {getOneWine} from '../../store/wines'
import { createCellar, deleteCellar } from '../../store/users';
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
    const [showReview, setShowReview] = useState(false)
    const [reload, setReload] = useState('')
    const profile = useParams()
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const wineId = props.wineId
    const userId = user.id
    const reviews = props.reviews
    const wines = useSelector((state) => state.wines)
    let cellarBtn;


    useEffect(() => {
        dispatch(getOneWine(wineId));
    }, [dispatch]);

    const handleAdd = (e) => {
        e.target.classList.replace("fa-parachute-box", "fa-people-carry")
        console.log('added')
        dispatch(createCellar(wineId, userId))
    }

    const handleRemove = (e) => {
        console.log('removed')
        console.log(userId, wineId)
        dispatch(deleteCellar(userId, wineId))
        setReload('true')
        console.log(reload)
    }

    if (profile.id) {
        cellarBtn = (
            <div className={styles.removeFromCellar} onClick={handleRemove}>
                <p>Remove from Cellar</p>
                <i className="fas fa-trash-alt"></i>
            </div>
        )
    } else {
        cellarBtn = (
            <button className={styles.addToCellar}>
                <p>Add to Cellar</p>
                <i className="fas fa-parachute-box" onClick={handleAdd}></i>
            </button>
        )
    }
    
    const wine = wines[wineId];
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
            <button className={styles.footerP}
                type="button" 
                onClick={()=> 
                {setShowReview(!showReview)}}
                >Write your own review!</button>
                {cellarBtn}
            {/* <button className={styles.addToCellar}>
                <p>Add to Cellar</p>
                <i className="fas fa-parachute-box" onClick={handleAdd}></i>
            </button> */}
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