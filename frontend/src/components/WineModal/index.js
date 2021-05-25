import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import WineCard from '../WineCard'
import { Modal } from '../../context/Modal';
import {useParams} from 'react-router-dom'

import winesReducer, {getOneWine} from '../../store/wines'
import styles from './WineModal.module.css'



const WineModal = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
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