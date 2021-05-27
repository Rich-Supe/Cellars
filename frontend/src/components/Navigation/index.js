// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import NavButtons from './NavButtons'
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import styles from './Navigation.module.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const wines = useSelector(state => state.wines)

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
        <div className={styles.sessionLinks}>
            <NavButtons wines={wines}/>
            <ProfileButton user={sessionUser} />
        </div>
      
    );
  } else {
    sessionLinks = (
      <div className={styles.sessionLinks}>
        <LoginFormModal />
        <SignupFormModal />
      </div>
    );
  }

  return (
    <div className={styles.navContainer}>
        <div className={styles.navlinks} id="nav-home-link">
        <NavLink className={styles.homeLink} exact to="/">CELLARS</NavLink>
        {isLoaded && sessionLinks}
        </div>
    </div>
  );
}

export default Navigation;