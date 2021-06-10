import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import WineCard from '../WineCard'
import {getCellar} from '../../store/users'
import styles from './Cellar.module.css';

const Cellar = ({id}) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCellar(id));
    }, [dispatch])
    
    const wines = useSelector((state) => Object.values(state.users))
    console.log('Should be crate of wines:::', wines)

    return (
        <div className={styles.cellar}>
            <p>CELLAR</p>
            <div className={styles.wineCardDiv}>
                {wines?.map(wine => {
                    return <div id={wine.id} key={wine.id} className={styles.WineCard}>
                        <WineCard wine={wine} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Cellar;