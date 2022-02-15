import * as api from "../../../api";

//actions types
import { FETCH_POST, CREATE_POST, DELETE_POST, UPDATE_POST } from "../types";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_POST, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.sendPost(newPost);
    dispatch({ type: CREATE_POST, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = (id, updatedPost) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, updatedPost);
    dispatch({ type: UPDATE_POST, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE_POST, payload: id });
  } catch (err) {
    console.log(err);
  }
};
