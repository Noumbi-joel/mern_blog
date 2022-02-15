import { LOGOUT, AUTH_SIGNIN, AUTH_SIGNUP } from "../../actions/types";

const reducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH_SIGNIN:
    case AUTH_SIGNUP:
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action?.payload };

    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default reducer;
