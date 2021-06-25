// import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import styles from './Navigation.module.css';
// import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session';
import { useSelector, useDispatch } from 'react-redux';
import { FiLogOut } from 'react-icons/fi'

function NavButtons({wines}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const id = sessionUser.id;

    const openProfile = () => {
            history.push(`/users/${id}`);
        };

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push("/");
        };

    return (
        <div className={styles.navButtons}>
            <div className={styles.navButtons__winesBtn}>
                {/* <button className={styles.btn} onClick={()=> history.push('/wines')}>Wines</button> */}
            <div className={styles.btn} onClick={()=> history.push(`/wines`)}>
                                <span>
                                <i className="fas fa-wine-bottle"></i>
                                Wines
                                </span>
                            </div>
            </div>
            <div className={styles.navButtons__profileBtn}>
                <div className={styles.btn} onClick={openProfile}>
                                    <span>
                                        <i className="fas fa-user-circle"></i>
                                        {sessionUser.username}
                                        </span>
                </div>
            </div>
            <div className={styles.navButtons__logoutBtnDiv} onClick={logout}>
                <FiLogOut className={styles.navButtons__logoutBtn}/>
            </div>
        </div>
    );
}

export default NavButtons;