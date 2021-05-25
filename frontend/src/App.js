import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import styles from './components/Navigation/Navigation.module.css';
import WinesContainer from './components/WinesContainer'
import WineModal from './components/WineModal'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
      <>
        <div className={styles.navbar}>
        <Navigation isLoaded={isLoaded} />
        {isLoaded && (
            <Switch>
            <Route path="/wines">
            <WinesContainer />
            </Route>
            <Route path="/wine/:id">
            <WineModal />
            </Route>
            </Switch>
        )}
        </div>
        {/* <div className={styles.display}>
        </div> */}
    </>

  );
}

export default App;