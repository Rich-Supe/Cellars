import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import styles from './Navigation.module.css';

function ProfileButton({ user }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const id = user.id

    const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
    };

    useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
        setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/")
    };

    return (
        <>
            <div className={styles.btn} onClick={openMenu}>
                                <span>
                                    <i class="fas fa-user-circle"></i>
                                    {user.username}
                                    </span>
                            </div>
            {/* <button className={styles.btn} onClick={openMenu}>
                {user.username}
            </button> */}
            {showMenu && (
            <ul className={styles.profile__dropdown}>
                <li>
                    {/* <div> */}
                        <i className="fas fa-user"></i>
                    {/* </div> */}
                    <button className={styles.dropdownBtn} onClick={()=> history.push(`/users/${id}`)}>Your Profile</button>
                </li>
                <li>
                    <i class="fas fa-sign-out-alt"></i>
                    <button className={styles.dropdownBtn} onClick={logout}>Log Out</button>
                </li>
            </ul>
            )}
        </>
    );
}

export default ProfileButton;