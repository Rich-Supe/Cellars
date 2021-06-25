// import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import * as sessionActions from '../../store/session';
// import styles from './Navigation.module.css';

// function ProfileButton({ user }) {
//     const history = useHistory();
//     const dispatch = useDispatch();
//     const [showMenu, setShowMenu] = useState(false);
//     const id = user.id

//     const openProfile = () => {
//     // if (showMenu) return;
//     // setShowMenu(true);
//         history.push(`/users/${id}`)
//     };

//     useEffect(() => {
//     if (!showMenu) return;

//     const closeMenu = () => {
//         setShowMenu(false);
//     };

//     document.addEventListener('click', closeMenu);

//     return () => document.removeEventListener("click", closeMenu);
//     }, [showMenu]);

//     const logout = (e) => {
//     e.preventDefault();
//     dispatch(sessionActions.logout());
//     history.push("/")
//     };

//     return (
//         <>
//             <div className={styles.btn} onClick={openMenu}>
//                                 <span>
//                                     <i className="fas fa-user-circle"></i>
//                                     {user.username}
//                                     </span>
//                             </div>
//         </>
//     );
// }

// export default ProfileButton;