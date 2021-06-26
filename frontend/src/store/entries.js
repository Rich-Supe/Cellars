import {csrfFetch} from './csrf'

const SET_ENTRIES = 'entries/SET_ENTRIES';
const SET_ENTRY = 'entries/SET_ENTRY'
const ADD_ENTRY = 'entries/ADD_ENTRY'
const CHANGE_ENTRY = 'entries/CHANGE_ENTRY'
const REMOVE_ENTRY = 'entries/REMOVE_ENTRY'

const setEntries = (entries) => ({
    type: SET_ENTRIES,
    entries
})

const setEntry = (entry) => ({
    type: SET_ENTRY,
    entry
})

const addEntry = (entry) => ({
    type: ADD_ENTRY,
    entry
})

const changeEntry = (entry) => ({
    type: CHANGE_ENTRY,
    entry
})

const removeEntry = () => ({
    type: REMOVE_ENTRY
})


//get all entries to user
export const getEntries = (id) => async(dispatch) => {
    const res = await csrfFetch(`/api/journal/${id}`);
    const entries = await res.json();
    dispatch(setEntries(entries))
}

//get one entry
export const getEntry = (userId, wineId) => async(dispatch) => {
    const res = await csrfFetch(`/api/journal/${userId}`, {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(wineId)
    });
    const entry = await res.json();
    dispatch(setEntry(entry))
}

// create entry
export const createEntry = (data) => async(dispatch) => {
    const res = await csrfFetch('/api/journal', {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    if (res.ok) {
        const entry = await res.json();
        dispatch(addEntry(entry))
        return entry
    }
}

//edit entry
export const editEntry = (data, userId) => async(dispatch) => {
    const res = await csrfFetch(`/api/journal/edit/${userId}`, {
        method: 'put',
        headers: {
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify(data)
    });
    if (res.ok) {
        const newEntry = await res.json();
        dispatch(changeEntry(newEntry))
    }
} 

//delete entry
export const deleteEntry = (userId, wineName) => async(dispatch) => {
    const res = await csrfFetch(`/api/journal/delete/${userId}`, {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({wineName})
      });
      if(res.ok){
          dispatch(removeEntry(res));
          return res;
      }
    };


const initialState = {};
const entriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ENTRIES:{
            const newState = { ...state };
            action.entries.forEach((entry) => {
                newState[entry.id] = entry
            })
            return newState
        }
        case SET_ENTRY:{
            const newState = { ...state };
            newState[action.entry.id] = action.entry
            return newState;
        }
        case ADD_ENTRY:
        case CHANGE_ENTRY:{
            const newState = { ...state };
            newState[action.entry.id] = action.entry
        }
        case REMOVE_ENTRY:{
        }

        default:
            return state;
    }
};

export default entriesReducer;