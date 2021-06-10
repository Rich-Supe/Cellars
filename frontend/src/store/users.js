import { createStore, combineReducers, applyMiddleware, compose, bindActionCreators } from 'redux';
import thunk from 'redux-thunk';

const SET_CELLAR = 'users/SET_CELLAR'

// ACTION CREATORS

const setCellar = (crate) => ({
    type: SET_CELLAR,
    crate
})


//THUNKS
// Display crate
export const getCellar = (id) => async(dispatch) => {
    // const res = await fetch(`/api/users/${id}`);
    const res = await fetch(`/api/users/1`);
    const cratesData = await res.json();
    // console.log("CRATESDATA-------", cratesData)
    // console.log("Newer______", cratesData.userCellar[0].Wines)
    // set to wines in crate
    cratesData.wines = cratesData.userCellar[0].Wines
    dispatch(setCellar(cratesData.wines))
}

// Add to crate


//Remove from crate


// REDUCERS
const initialState = {};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CELLAR:{
            const newState = { ...state };
            action.crate.forEach((wine) => {
                newState[wine.id] = wine
            });
            return newState
        }
        default:
            return state;
    }
}

export default usersReducer;