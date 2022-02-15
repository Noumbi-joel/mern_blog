import { combineReducers } from "redux";

import contact from "./contact";
import user from "./user";
import post from "./post";
import auth from "./auth";

export default combineReducers({
  contact,
  user,
  post,
  auth
});
