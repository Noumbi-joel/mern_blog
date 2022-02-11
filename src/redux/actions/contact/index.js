import * as api from "../../../api";

//actions types
import { FETCH_CONTACT, CREATE_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "../types";

export const getContacts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchContact();
    dispatch({ type: FETCH_CONTACT, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const createContact = (newContact) => async (dispatch) => {
  try {
    const { data } = await api.postContact(newContact);
    dispatch({ type: CREATE_CONTACT, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const updateContact = (id, updatedContact) => async (dispatch) => {
  try {
    const { data } = await api.updateContact(id, updatedContact);
    dispatch({ type: UPDATE_CONTACT, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await api.deleteContact(id);
    dispatch({ type: DELETE_CONTACT, payload: id });
  } catch (err) {
    console.log(err);
  }
};