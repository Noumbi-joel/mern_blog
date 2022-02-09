import * as api from "../../../api";

//actions types
import { FETCH_CONTACT, CREATE_CONTACT } from "../types";

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
