// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import {csrfFetch} from './csrf'

// Create an action type constant
const SET_WINES = 'wines/SET_WINES'
const SET_ONE_WINE = 'wines/SET_ONE_WINE'
const SET_SOME_WINES = 'wines/SET_SOME_WINES'
const SET_WINE_BY_NAME = 'wines/SET_WINE_BY_NAME'
const ADD_WINE = 'wines/ADD_WINE'
const CREATE_REVIEW = 'wines/CREATE_REVIEW'
const CREATE_REVIEW_PROFILE = 'wines/CREATE_REVIEW_PROFILE'

// Create an action creator that returns an action (just a POJO)
const setWines = (wines) => ({
    type: SET_WINES,
    wines
})

const setOneWine = (wine) => ({
    type: SET_ONE_WINE,
    wine
})

const setSomeWines = (wines) => ({
    type: SET_SOME_WINES,
    wines
})

const setWineByName = (wines) => ({
    type: SET_WINE_BY_NAME,
    wines
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

const setProfileReview = (review, wineId) => ({
    type: CREATE_REVIEW_PROFILE,
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

export const getSomeWines = (searchData) => async (dispatch) => {
    // console.log(searchCriteria, selectedChoice)
    // const res = await fetch(`/api/wines/search/${searchCriteria}/${selectedChoice}`);
    const res = await csrfFetch(`/api/wines/search/searchData`, {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(searchData)
    })
    const wines = await res.json();
    // console.log(`Searched wines from backend:`, wines)
    dispatch(setSomeWines(wines))
}

export const getWineByName = (name) => async (dispatch) => {
    const res = await csrfFetch(`/api/wines/search/${name}`)
    if (res.ok) {
        const wines = await res.json();
        // console.log(`WINES from get wine by name thunk`, wines)
        dispatch(setWineByName(wines))
    }
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

export const createReview = (data, profile) => async(dispatch) => {
    const res = await csrfFetch(`/api/wines/${data.wineId}`, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    const reviewData = await res.json();
    if (profile) {
        // console.log(`-----------------`, reviewData)
        dispatch(setProfileReview(reviewData, data.wineId))
    } else {
    dispatch(setReview(reviewData, data.wineId))
    }
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
        case SET_SOME_WINES:{
            const newState = {};
            action.wines.forEach((wine) => {
                newState[wine.id] = wine
            });
            return newState;
        }
        case SET_WINE_BY_NAME:{
            const newState = {};
            action.wines.forEach((wine) => {
                newState[wine.id] = wine
            });
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
