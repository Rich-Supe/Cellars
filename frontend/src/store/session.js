import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};
//Login thunk action
export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

//restore user thunk action
export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
  };


//Signup Thunk
export const signup = (user) => async (dispatch) => {
    const { username, email, password, name, birthday, image, images } = user;
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("name", name);
    formData.append("birthday", birthday);
  // for multiple files
    if (images && images.length !== 0) {
        for (var i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
        }
    }

    // for single file
    if (image) formData.append("image", image);

    const response = await csrfFetch(`/api/users/`, {
        method: "POST",
        headers: {
        "Content-Type": "multipart/form-data",
        },
        body: formData,
    });

    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
  };

  //logout thunk
  export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
      method: 'DELETE',
    });
    dispatch(removeUser());
    return response;
  };

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    // case SET_USER:
    //   newState = Object.assign({}, state);
    //   newState.user = action.payload;
    //   return newState;
    case SET_USER:
          return { ...state, user: action.payload };
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;