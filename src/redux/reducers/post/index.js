//actions types
import {
  FETCH_POST,
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
} from "../../actions/types";

const defaultState = {
  posts: [],
};

const reducer = (state = defaultState.posts, action) => {
  switch (action.type) {
    case FETCH_POST:
      return action.payload;
    case CREATE_POST:
      return [...state, action.payload];
    case UPDATE_POST:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE_POST:
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
