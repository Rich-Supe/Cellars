import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import styles from './components/Navigation/Navigation.module.css';
import WinesContainer from './components/WinesContainer'
import Profile from './components/Profile'
import Splash from './components/Splash'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
      <>
        {/* <div className={styles.webPage}> */}
        <Navigation isLoaded={isLoaded} />
        {isLoaded && (
            <Switch>
            <Route path='/' exact>
                <Splash />
            </Route>
            <Route path="/wines">
                <WinesContainer />
            </Route>
            <Route path='/users/:id'>
                <Profile />
            </Route>
            </Switch>
        )}
        {/* </div> */}
    </>

  );
}

export default App;