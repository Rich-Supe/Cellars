import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import CellarCard from './cellarCards'
import WinesCard from '../WineCard';
import {getCellar} from '../../store/users'
import styles from './Cellar.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination])

const Cellar = ({id}) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCellar(id));
    }, [])
    
    const wines = useSelector((state) => Object.values(state.users))
    // console.log('Should be crate of wines:::', wines)
    let wineAmount = wines.length

    const slides = [];
    let i = 0
    wines.forEach((wine) => {
        slides.push(
            <SwiperSlide key={`slide-${i}`}>
                <WinesCard wine={wine} />
            </SwiperSlide>
        )
        i++
    })
    
    return (
        <>
        <header className={styles.cellar__header}>
            {/* <i className="fas fa-boxes"></i> */}
            Currently Holding {wineAmount} Wines
            </header>
        <div className={styles.cellarContainer}>
            <div className={styles.cellar}>
                <Swiper id="main" 
                    tag="section" 
                    wrapperTag="ul" 
                    className={styles.swiperContainer}
                    navigation 
                    pagination 
                    spaceBetween={0} 
                    slidesPerView={3}
                    // onInit={(swiper) => console.log('Swiper initialized', swiper)}
                    // onSlideChange={(swiper) => {
                    //     console.log('Swiper slide: ', swiper)
                    // }}
                    // onReachEnd={() => console.log("Swiper end")}
                >{slides}</Swiper>
            </div>
        </div>
        </>
    )
}

export default Cellar;