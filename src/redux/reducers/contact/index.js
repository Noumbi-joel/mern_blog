import {
  CREATE_CONTACT,
  FETCH_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from "../../actions/types";

const defaultState = {
  contacts: [],
};

const reducer = (state = defaultState.contacts, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return [...state, action.payload];
    case FETCH_CONTACT:
      return action.payload;
    case UPDATE_CONTACT:
      return state.map((contact) =>
        contact._id === action.payload._id ? action.payload : contact
      );
    case DELETE_CONTACT:
      return state.filter((c) => c._id !== action.payload._id);
    default:
      return state;
  }
};

export default reducer;
