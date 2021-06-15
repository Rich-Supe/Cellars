// import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import styles from './Navigation.module.css';
import ProfileButton from './ProfileButton';
import { useSelector } from 'react-redux';


function NavButtons({wines}) {
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className={styles.navButtons}>
            <ProfileButton user={sessionUser} />
            <button className={styles.profileBtn} onClick={()=> history.push('/wines')}>Wines</button>
        </div>
    );
}

export default NavButtons;