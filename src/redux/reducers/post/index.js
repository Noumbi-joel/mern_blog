//actions types
import {
  FETCH_POST,
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
} from "../../actions/types";

const defaultState = {
  posts: [],
  categories: [
    { name: "Skills", posts: [] },
    { name: "Experiences", posts: [] },
    { name: "Education", posts: [] },
    { name: "Services", posts: [] },
    { name: "Portfolio", posts: [] },
    { name: "Clients", posts: [] },
    { name: "Blogs", posts: [] },
    { name: "Work Process", posts: [] },
  ],
};

const reducer = (state = defaultState.posts, action) => {
  switch (action.type) {
    case FETCH_POST:
      action.payload.forEach((post) => {
        switch (post.categoryName) {
          case "Skills":
            if (!(defaultState.categories[0].posts.includes(post))) {
              return defaultState.categories[0].posts.push(post);
            }
            return null;

          case "Experiences":
            if (!(defaultState.categories[1].posts.includes(post))) {
              return defaultState.categories[1].posts.push(post);
            }
            return null;

          case "Education":
            if (!(defaultState.categories[2].posts.includes(post))) {
              return defaultState.categories[2].posts.push(post);
            }
            return null;

          case "Services":
            if (!(defaultState.categories[3].posts.includes(post))) {
              return defaultState.categories[3].posts.push(post);
            }
            return null;

          case "Portfolio":
            if (!(defaultState.categories[4].posts.includes(post))) {
              return defaultState.categories[4].posts.push(post);
            }
            return null;

          case "Clients":
            if (!(defaultState.categories[5].posts.includes(post))) {
              return defaultState.categories[5].posts.push(post);
            }
            return null;

          case "Blogs":
            if (!(defaultState.categories[6].posts.includes(post))) {
              return defaultState.categories[6].posts.push(post);
            }
            return null;
          
          case "Work Process":
            if (!defaultState.categories[7].posts.includes(post)) {
              return defaultState.categories[7].posts.push(post);
            }
            return null;
          default:
            return [];
        }
      });
      return defaultState.categories;
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
