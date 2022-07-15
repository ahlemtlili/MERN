import {
  GET_CURRENT_USER_FAIL,
  GET_CURRENT_USER_SUCCESS,
  LOGOUT,
  SIGNIN_USER_FAIL,
  SIGNIN_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  SIGNUP_USER_SUCCESS,
} from "../constants/userTypes";

const initialState = {
  loading: false,
  currentUser: {},
  errors: null,
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_USER_SUCCESS:
      return { ...state, currentUser: payload };
    case SIGNUP_USER_FAIL:
      return { ...state, errors: payload };
    case SIGNIN_USER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return { ...state, currentUser: payload.user };
    case SIGNIN_USER_FAIL:
      return { ...state, errors: payload };
    case GET_CURRENT_USER_SUCCESS:
      return { ...state, currentUser: payload };
    case GET_CURRENT_USER_FAIL:
      return { ...state, errors: payload };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        loading: false,
        currentUser: {},
        errors: null,
      };
    default:
      return state;
  }
};
