import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import WinesContainer from './components/WinesContainer';
import Profile from './components/Profile';
import Splash from './components/Splash';
import AddWine from './components/AddWine';
import Journal from "./components/Journal";
import JournalForm from "./components/JournalForm";

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
            <Route path='/addwine'>
                <AddWine />
            </Route>
            <Route path='/journal' exact>
                <Journal />
            </Route>
            <Route path='/journal/new'>
                <JournalForm />
            </Route>
            </Switch>
        )}
        {/* </div> */}
    </>

  );
}

export default App;