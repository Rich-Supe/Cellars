// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';


// Create an action type constant
const SET_WINES = 'wines/SET_WINES'

// Create an action creator that returns an action (just a POJO)
const setWines = (wines) => ({
    type: SET_WINES,
    wines
})


// Create a thunk that dispatches the action creator
// get doesn't require creating a JSON obj
export const getWines = () => async (dispatch) => {
    const res = await fetch('/api/wines');
    const wines = await res.json();
    // console.log(wines)
    dispatch(setWines(wines))
}

//Define initial state
const initialState = {};

// Create a reducer and add it to the store
const winesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WINES:
            const newState = { ...state };
            action.wines.forEach((wine) => {
                newState[wine.id] = wine
            });
            return newState;
        default:
            return state;
    }
}

export default winesReducer;
