import axios from "axios";

const url = "http://localhost:5000/contacts";

export const fetchContact = () => axios.get(url);
export const postContact = (newContact) => axios.post(url, newContact);