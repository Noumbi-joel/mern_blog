//actions types
import {
  FETCH_USER,
  CREATE_USER,
  DELETE_USER,
  FETCH_PROFILE,
  UPDATE_PROFILE,
} from "../../actions/types";

const defaultState = {
  users: [],
};

const reducer = (state = defaultState.users, action) => {
  switch (action.type) {
    case FETCH_USER:
    case FETCH_PROFILE:
      return action.payload;
    case CREATE_USER:
      return [...state, action.payload]; 
    case UPDATE_PROFILE:
      return state.map((user) =>
        user._id === action.payload._id ? action.payload : user
      );
    case DELETE_USER:
      return state.filter((user) => user.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
