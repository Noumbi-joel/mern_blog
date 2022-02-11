import axios from "axios";

const API = axios.create({ baseUrl: "http://localhost:5000" });

//contacts
export const fetchContact = () => API.get("/contacts");
export const postContact = (newContact) => API.post("/contacts", newContact);
export const updateContact = (id, updatedContact) =>
  API.patch(`/contacts/${id}`, updatedContact);
export const deleteContact = (id) => API.delete(`/contacts/${id}`);

//auth
export const fetchUser = () => API.get("/auth");
export const postUser = (newUser) => API.post(`/auth/signup`, newUser);
export const deleteUser = (id) => API.delete(`/auth/delete/user/${id}`);

//profile
export const fetchProfile = (id) => API.get(`/profile/${id}`);
export const updateProfile = (id, updatedProfile) =>
  API.patch(`/profile/${id}`, updatedProfile);
