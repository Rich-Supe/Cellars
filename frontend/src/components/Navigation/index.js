// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import styles from './Navigation.module.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
        <div className={styles.sessionLinks}>
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
    // <nav>
    <div className={styles.navlinks} id="nav-home-link">
      <NavLink className={styles.homeLink} exact to="/">Home</NavLink>
       {isLoaded && sessionLinks}
    </div>
//  </nav>
  );
}

export default Navigation;