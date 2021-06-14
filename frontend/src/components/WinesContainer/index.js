import React, {useEffect, useState} from 'react';
// import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import WineCard from '../WineCard'

import {getWines} from '../../store/wines'
import styles from './WinesContainer.module.css'
// import background from '../../assets/images/vineyard2.jpg'

const WinesContainer = ({wine}) => {
    const dispatch = useDispatch()
    const wines = useSelector((state) => Object.values(state.wines))
    // console.log(wines)
  
    useEffect(() => {
        dispatch(getWines());
    }, [dispatch]);

    return (
        <>
            <div className={styles.searchHeader}>
                <p>Looking for a specific wine?</p>
            </div>
            <div className={styles.searchBar}>
                <ul className={styles.dropdowns}>
                    <li className={styles.dropdown__header}>
                        COLOR
                        <i class="fas fa-caret-down"></i>
                        <ul className={styles.dropdown__options}>
                            <li className={styles.dropdown__options_li}>Red</li>
                            <li className={styles.dropdown__options_li}>White</li>
                        </ul>
                    </li>
                    <li className={styles.dropdown__header}>
                        GRAPE
                        <i class="fas fa-caret-down"></i>
                        <ul className={styles.dropdown__options}>
                            <li className={styles.dropdown__options_li}>Sauvignon Blanc</li>
                            <li className={styles.dropdown__options_li}>Cabernet Sauvignon</li>
                            <li className={styles.dropdown__options_li}>Pinot Noir</li>
                            <li className={styles.dropdown__options_li}>Merlot</li>
                            <li className={styles.dropdown__options_li}>Chardonnay</li>
                            <li className={styles.dropdown__options_li}>Riesling</li>
                        </ul>
                    </li>
                    <li className={styles.dropdown__header}>
                        COUNTRY
                        <i class="fas fa-caret-down"></i>
                        <ul className={styles.dropdown__options}>
                            <li className={styles.dropdown__options_li}>Usa</li>
                            <li className={styles.dropdown__options_li}>France</li>
                            <li className={styles.dropdown__options_li}>Italy</li>
                            <li className={styles.dropdown__options_li}>Spain</li>
                            <li className={styles.dropdown__options_li}>Australia</li>
                            <li className={styles.dropdown__options_li}>Germany</li>
                        </ul>
                    </li>
                    <li className={styles.dropdown__header}>
                        <input placeholder="YEAR" type="number">
                        </input>
                    </li>
                    <li>
                        <input placeholder="NAME">
                        </input>
                    </li>
                </ul>
            </div>
            <div className={styles.WinesContainer}>
                {wines?.map(wine=>{
                    return <div id={wine.id} key={wine.id} className={styles.WineCard}>
                        <WineCard wine={wine}/>
                    </div>
                })}

            </div>
        </>
    )

}


export default WinesContainer;