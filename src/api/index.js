import axios from "axios";

const API = axios.create({ baseUrl: "http://localhost:5000" });

//contacts
export const fetchContact = () => API.get("/contacts");
export const postContact = (newContact) => API.post("/contacts", newContact);
export const updateContact = (id, updatedContact) =>
  API.patch(`/contacts/${id}`, updatedContact);
export const deleteContact = (id) => API.delete(`/contacts/${id}`);

//auth
export const postUser = (newUser) => API.post(`/auth/signup`, newUser);

//profile
export const fetchProfile = (id) => API.get(`/profile/${id}`);
export const updateProfile = (id, updatedProfile) =>
  API.patch(`/profile/${id}`, updatedProfile);

//user
export const signUp = (formData) => API.post("/auth/signup", formData);
export const signIn = (formData) => API.post("/auth/signin", formData);

export const fetchUser = () => API.get("/user");
export const deleteUser = (id) => API.delete(`/user/delete/${id}`);

//post
export const fetchPosts = () => API.get("/posts");
export const sendPost = (newPost) => API.post("/posts/add", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/update/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/delete/${id}`);
