// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import {csrfFetch} from './csrf'

// Create an action type constant
const SET_WINES = 'wines/SET_WINES'
const SET_ONE_WINE = 'wines/SET_ONE_WINE'
const ADD_WINE = 'wines/ADD_WINE'
const CREATE_REVIEW = 'wines/CREATE_REVIEW'

// Create an action creator that returns an action (just a POJO)
const setWines = (wines) => ({
    type: SET_WINES,
    wines
})

const setOneWine = (wine) => ({
    type: SET_ONE_WINE,
    wine
})

const addWine = (wine) => ({
    type: ADD_WINE,
    wine
})

const setReview = (review, wineId) => ({
    type: CREATE_REVIEW,
    review,
    wineId
})


// Create a thunk that dispatches the action creator
// get doesn't require creating a JSON obj
export const getWines = () => async (dispatch) => {
    const res = await fetch('/api/wines');
    const wines = await res.json();
    // console.log(wines)
    dispatch(setWines(wines))
}

export const getOneWine = (id) => async(dispatch) => {
    const res = await fetch(`/api/wines/${id}`);
    // const res = await fetch('/api/wines/1');
    const wineData = await res.json();
    wineData.wine.reviews = wineData.reviews
    dispatch(setOneWine(wineData.wine))
}

export const createWine = (data) => async(dispatch) => {
    const res = await csrfFetch(`/api/wines`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

    if (res.ok) {
        const wine = await res.json();
        dispatch(addWine(wine));
        return wine
    }
}

//Reviews on Wines

export const createReview = (data) => async(dispatch) => {
    const res = await csrfFetch(`/api/wines/${data.wineId}`, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    const reviewData = await res.json();
    console.log(`-----------------`, reviewData)
    dispatch(setReview(reviewData, data.wineId))
}

//Edit Reviews


//Define initial state
const initialState = {};

// Create a reducer and add it to the store
const winesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WINES:{
            const newState = { ...state };
            action.wines.forEach((wine) => {
                newState[wine.id] = wine
            });
            return newState;
        }
        case SET_ONE_WINE:{
            const newState = { ...state };
            newState[action.wine.id] = action.wine
            return newState;
        }
        case ADD_WINE:
        case CREATE_REVIEW:{
            const newState = { ...state };
            newState[action.wineId] = { ...newState[action.wineId]};
            if(newState[action.wineId].reviews){
                newState[action.wineId].reviews = [...newState[action.wineId].reviews]
                newState[action.wineId].reviews.push(action.review)
            }
            return newState
        }
        default:
            return state;
    }
}

export default winesReducer;
