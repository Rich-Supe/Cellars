import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import styles from './Navigation.module.css';
import WinesContainer from '../winesContainer'

function NavButtons({wines}) {

    return (
        <div className={styles.navButtons}>
            <button className={styles.profileBtn} onClick={WinesContainer}>Wines</button>
        </div>
    );
}

export default NavButtons;