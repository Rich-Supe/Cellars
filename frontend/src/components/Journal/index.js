import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getEntries } from '../../store/entries'
import JournalCards from './JournalCards';
import styles from './Journal.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css'
SwiperCore.use([Navigation, Pagination])


const Journal = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id
    const journalEntries = useSelector((state) => state.entries)

    const wines = Object.values(journalEntries).map((obj) => obj.Wine)
    const entries = Object.values(journalEntries).map((obj) => obj)

    console.log(wines, entries)


    useEffect(() => {
        dispatch(getEntries(userId))
    }, [])

    const slides = [];
    let i = 0

    if(entries){
        entries.forEach((entry) => {
            slides.push(
                <SwiperSlide key={`slide-${i}`}>
                    {/* <ReviewsBox props={{review}}/> */}
                    <header className={styles.card__header}>{entry.Wine.name}</header>
                    <JournalCards entry={entry}/>
                </SwiperSlide>
            )
            i++
        })
    }
    
    return (
        <>
            {/* <header>YOUR JOURNAL</header> */}
            <div className={styles.journal}>
                <div className={styles.entriesDisplay}>
                    <header className={styles.journal__header}></header>
                    <div className={styles.cards}>
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

                <footer className={styles.journal__footer}>
                    <div className={styles.journal__newEntry}>
                        <div className={styles.text_box1} onClick={() => history.push('/journal/new')}>
                            <a href="#" className={`${styles.btn} ${styles.btn1} ${styles.btn_white} ${styles.btn_animate}`}>New Entry</a>
                        </div>
                    </div>
                    <div className={styles.journal__editEntry}>
                        <div className={styles.text_box2} onClick={(e)=> history.push('/journal/edit')} data='food'>
                            <a href="#" className={`${styles.btn} ${styles.btn_white} ${styles.btn_animate}`} data='food'>Edit Entries</a>
                        </div>
                    </div>

                </footer>
            </div>
        </>
    )
}

export default Journal;