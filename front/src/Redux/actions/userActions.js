import axios from "axios";
import {
  GET_CURRENT_USER_FAIL,
  GET_CURRENT_USER_SUCCESS,
  LOGOUT,
  SIGNIN_USER_FAIL,
  SIGNIN_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  SIGNUP_USER_SUCCESS,
} from "../constants/userTypes";

export const signupUser = (user, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/users/registeruser",
      user
    );
    dispatch({ type: SIGNUP_USER_SUCCESS, payload: response.data.newUser });
    navigate("/signIn");
  } catch (error) {
    console.log(error);
    dispatch({ type: SIGNUP_USER_FAIL, payload: error });
  }
};
export const signinUser = (user, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/users/login",
      user
    );
    dispatch({ type: SIGNIN_USER_SUCCESS, payload: response.data });
    navigate("/");
  } catch (error) {
    console.log(error);
    dispatch({ type: SIGNIN_USER_FAIL, payload: error });
  }
};
export const getCurrentuser = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(
      "http://localhost:5000/users/currentUser",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    dispatch({ type: GET_CURRENT_USER_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_CURRENT_USER_FAIL, payload: error });
  }
};
export const logoutUser = (navigate) => {
  //navigate("/signIn");
  return { type: LOGOUT };
};
