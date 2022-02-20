import React, { useEffect, useState } from "react";
import Header from "../../../components/Admin/Header";
import Dashboard from "./DashboardPage";

import { Box, CircularProgress, Typography } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

//actions
import {
  getContacts,
  updateContact,
  deleteContact,
} from "../../../redux/actions/contact";

import ContactCard from "../../../components/Admin/ContactCard";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Dashboard>
      <Header headerName="Contacts Informations" />
      {contacts.length <= 0 && (
        <Box textAlign="center">
          <CircularProgress />
          <Typography variant="body1" fontFamily="Poppins">
            Wait a moment please...
          </Typography>
        </Box>
      )}
      {contacts.length > 0 &&
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
