import { stopSubmit } from "redux-form";
import { headerAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.payload,
           
            }

        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })

export const getAuthUserData = () => (dispatch) => {
    headerAPI.getHeader()
        .then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    headerAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData())

            }else {
                let message = response.data.message.length > 0 ? response.data.message[0] : 'Some Error';
                dispatch(stopSubmit("login", {_error: message}));
            }

        });
}

export const logout = () => (dispatch) => {
    headerAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))

            }

        });
}

export default authReducer;