import * as api from "../../../api";

//actions types
import {
  FETCH_USER,
  CREATE_USER,
  DELETE_USER,
  FETCH_PROFILE,
  UPDATE_PROFILE,
  GET_ID
} from "../types";

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUser();
    dispatch({ type: FETCH_USER, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const createUser = (newUser) => async (dispatch) => {
  try {
    const { data } = await api.postUser(newUser);
    dispatch({ type: CREATE_USER, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await api.deleteUser(id);
    dispatch({ type: DELETE_USER, payload: id });
  } catch (err) {
    console.log(err);
  }
};

export const getProfile = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchProfile(id);
    dispatch({ type: FETCH_PROFILE, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const upgradeProfile = (id, updatedProfile) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile(id, updatedProfile);
    dispatch({ type: UPDATE_PROFILE, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const getIdFromBack = () => async (dispatch) => {
  try {
    const { data } = await api.fetchId();
    dispatch({ type: GET_ID, payload: data });
  } catch (err) {
    console.log(err);
  }
};
