import { csrfFetch } from "./csrf"

const SET_CELLAR = 'users/SET_CELLAR'
const CREATE_REVIEW_PROFILE = 'wines/CREATE_REVIEW_PROFILE'
const ADD_TO_CELLAR = 'users/ADD_TO_CELLAR'
const REMOVE_FROM_CELLAR = 'users/REMOVE_FROM_CELLAR'

// ACTION CREATORS

const setCellar = (crate) => ({
    type: SET_CELLAR,
    crate
})

const addToCellar = (crate) => ({
    type: ADD_TO_CELLAR,
    crate
})

const removeFromCellar = (crate) => ({
    type: REMOVE_FROM_CELLAR,
    crate
})


//THUNKS
// Display crate
export const getCellar = (id) => async(dispatch) => {
    const res = await fetch(`/api/users/${id}`);
    const cratesData = await res.json();
    // console.log("CRATESDATA-------", cratesData)
    // console.log("Newer______", cratesData.userCellar[0].Wines)
    // set to wines in crate
    cratesData.wines = cratesData.userCellar[0].Wines
    // console.log(`CRATES DATA FROM CRATES THUNK`, cratesData)
    dispatch(setCellar(cratesData.wines))
}

// Add to crate

export const createCellar = (wineId, userId) => async(dispatch) => {
    const res = await csrfFetch(`/api/users/${userId}`, {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({wineId})
    });
    if (res.ok) {
        const cellar = await res.json();
        dispatch(addToCellar(cellar))
        return cellar
    }
}

//Remove from crate

export const deleteCellar = (userId, wineId) => async(dispatch) => {
    console.log('---------', userId, wineId)
    const res = await csrfFetch(`/api/users/delete/${userId}`, {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({wineId})
      });
      if(res.ok){
          console.log('---------', userId, wineId)
          dispatch(removeFromCellar(res));
          return res;
      }
}


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
        case ADD_TO_CELLAR: {
            console.log(`REDUCER ADD ===`, action.crate)
            const newState = { ...state }
            return newState
        }
        case REMOVE_FROM_CELLAR: {
            const newState = { ...state };
            console.log(`REDUCER DELETE ===`, action.crate)
            // action.crate.forEach((wine) => {
            //     newState[wine.id] = wine
            // });
            delete newState[action.crate.id]
            return newState
        }
        case CREATE_REVIEW_PROFILE:{
            const newState = { ...state };
            newState[action.wineId] = { ...newState[action.wineId]};
            if(newState[action.wineId].Reviews){
                newState[action.wineId].Reviews = [...newState[action.wineId].Reviews]
                newState[action.wineId].Reviews.push(action.review)
            }
            return newState
        }
        default:
            return state;
    }
}

export default usersReducer;