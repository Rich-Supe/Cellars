import React, {useEffect, useState} from 'react';
// import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import WineCard from '../WineCard'

import {getWines} from '../../store/wines'
import styles from './WinesContainer.module.css'
// import background from '../../assets/images/vineyard2.jpg'

const WinesContainer = ({wine}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const wines = useSelector((state) => Object.values(state.wines))
    const [ grape, setGrape ] = useState('')
    const [ color, setColor ] = useState('')
    const [ country, setCountry ] = useState('')
    const [ year, setYear ] = useState('')
    const [ name, setName ] = useState('')

    console.log(`Grape:`,grape, `     color:`,color, `     country:`,country)
    console.log(`year:`, year, `      name:`, name)
  
    useEffect(() => {
        dispatch(getWines());
    }, [dispatch]);

    return (
        <div className={styles.winePage}>
            <div className={styles.searchHeader}>
                <p>Every great Cellar starts somewhere!</p>
            </div>
            <div className={styles.searchBar}>
                <ul className={styles.dropdown}>
                    <li className={styles.dropdown__header}>
                        <header>COLOR<i className="fas fa-caret-down"></i></header>
                        <ul className={styles.dropdown__options}>
                            <li className={styles.dropdown__options_li} onClick={(e) => setColor("Red")}>Red</li>
                            <li className={styles.dropdown__options_li} onClick={(e) => setColor("White")}>White</li>
                        </ul>
                    </li>
                    <li className={styles.dropdown__header}>
                        <header>GRAPE<i className="fas fa-caret-down"></i></header>
                        <ul className={styles.dropdown__options}>
                            <li className={styles.dropdown__options_li} onClick={(e) => setGrape('Sauvignon Blanc')}>Sauvignon Blanc</li>
                            <li className={styles.dropdown__options_li} onClick={(e) => setGrape('Cabernet Sauvignon')}>Cabernet Sauvignon</li>
                            <li className={styles.dropdown__options_li} onClick={(e) => setGrape('Pinot Noir')}>Pinot Noir</li>
                            <li className={styles.dropdown__options_li} onClick={(e) => setGrape('Merlot')}>Merlot</li>
                            <li className={styles.dropdown__options_li} onClick={(e) => setGrape('Chardonnay')}>Chardonnay</li>
                            <li className={styles.dropdown__options_li} onClick={(e) => setGrape('Riesling')}>Riesling</li>
                        </ul>
                    </li>
                    <li className={styles.dropdown__header}>
                        <header>COUNTRY<i className="fas fa-caret-down"></i></header>
                        <ul className={styles.dropdown__options}>
                            <li className={styles.dropdown__options_li} onClick={(e) => setCountry("USA")}>Usa</li>
                            <li className={styles.dropdown__options_li} onClick={(e) => setCountry("France")}>France</li>
                            <li className={styles.dropdown__options_li} onClick={(e) => setCountry("Italy")}>Italy</li>
                            <li className={styles.dropdown__options_li} onClick={(e) => setCountry("Spain")}>Spain</li>
                            <li className={styles.dropdown__options_li} onClick={(e) => setCountry("Australia")}>Australia</li>
                            <li className={styles.dropdown__options_li} onClick={(e) => setCountry("Germany")}>Germany</li>
                        </ul>
                    </li>
                    <li className={styles.dropdown__header_year}>
                        <input placeholder="search by year" type="number" id="year" onChange={(e) => setYear(e.target.value)}>
                        </input>
                    </li>
                    <li className={styles.dropdown__header_name}>
                        <input placeholder="Search by name" id="name" onChange={(e) => setName(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        {/* <button className={styles.addWineBtn} onClick={()=> history.push(`/addwine`)}>Add Wine</button> */}
                        <div className={styles.box1}>
                            <div className={styles.btn} onClick={()=> history.push(`/addwine`)}>
                                <span>CREATE WINE</span>
                            </div>
                        </div>
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
        </div>
    )

}


export default WinesContainer;