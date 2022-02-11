import React, { useEffect, useState } from "react";
import Header from "../../../components/Admin/Header";
import Dashboard from "./DashboardPage";

import { Box, CircularProgress } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

//actions
import { getContacts, updateContact, deleteContact } from "../../../redux/actions/contact";

import ContactCard from "../../../components/Admin/ContactCard";

const ContactList = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const contacts = useSelector((state) => state.contact);

  useEffect(() => {
    dispatch(getContacts());
    if (contacts.length > 0) {
      setLoading(false);
    }
  }, [dispatch, contacts]);

  return (
    <Dashboard>
      <Header headerName="Contacts Informations" />
      {loading && (
        <Box textAlign="center">
          <CircularProgress />
        </Box>
      )}
      {!loading &&
        contacts.map((contact) => (
          <ContactCard
            key={contact._id}
            id={contact._id}
            dispatch={dispatch}
            updateContact={updateContact}
            deleteContact={deleteContact}
            contact={contact}
          />
        ))}
    </Dashboard>
  );
};

export default ContactList;
