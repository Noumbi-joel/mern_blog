import * as api from "../../../api";

//actions types
import { AUTH_SIGNIN, AUTH_SIGNUP, LOGOUT } from "../types";

export const signin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH_SIGNIN, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const signup = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH_SIGNUP, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT });
  } catch (err) {
    console.log(err);
  }
};
