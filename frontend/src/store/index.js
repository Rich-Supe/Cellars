import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import sessionReducer from './session';
//import reducers
import winesReducer from './wines';
import usersReducer from './users'

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const rootReducer = combineReducers({
    session: sessionReducer,
    //and place them
    wines: winesReducer,
    users: usersReducer,
});


const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };
  


  export default configureStore;