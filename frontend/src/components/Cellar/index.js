import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CellarCard from './cellarCards'
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
    console.log('Should be crate of wines:::', wines)

    const slides = [];
    let i = 0
    wines.forEach((wine) => {
        slides.push(
            <SwiperSlide key={`slide-${i}`}>
                <CellarCard wine={wine} />
            </SwiperSlide>
        )
        i++
    })
    
    return (
        <div className={styles.cellar}>
            <header className={styles.cellarHeader}>Your Cellar</header>
            <Swiper id="main" 
                tag="section" 
                wrapperTag="ul" 
                navigation 
                pagination 
                spaceBetween={0} 
                slidesPerView={3}
                onInit={(swiper) => console.log('Swiper initialized', swiper)}
                onSlideChange={(swiper) => {
                    console.log('Swiper slide: ', swiper)
                }}
                onReachEnd={() => console.log("Swiper end")}
            >{slides}</Swiper>
        </div>
    )
}

export default Cellar;