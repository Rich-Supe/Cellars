import React, {useEffect} from 'react';
// import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import WineCard from '../WineCard'

import {getWines} from '../../store/wines'
import styles from './WinesContainer.module.css'
import background from '../../assets/images/vineyard2.jpg'

const WinesContainer = ({wine}) => {
    const dispatch = useDispatch()
    const wines = useSelector((state) => Object.values(state.wines))
    // console.log(wines)
  
    useEffect(() => {
        dispatch(getWines());
    }, [dispatch]);

    return (
        <>
            {/* <div className={styles.banner} style={{ backgroundImage: `url(${background})`}}></div> */}
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