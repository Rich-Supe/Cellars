// import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import styles from './Navigation.module.css';


function NavButtons({wines}) {
    const history = useHistory()

    return (
        <div className={styles.navButtons}>
            <button className={styles.profileBtn} onClick={()=> history.push('/wines')}>Wines</button>
        </div>
    );
}

export default NavButtons;