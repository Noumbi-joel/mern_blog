import React, { useState } from "react";
import { Button, TextField, Typography, Alert } from "@mui/material";
import { Form } from "react-bootstrap";

import Input from "../Input";

//***** redux ***** //
//actions
import { createContact } from "../../redux/actions/contact";

import { useDispatch } from "react-redux";

const FormGroup = ({ colors }) => {
  const dispatch = useDispatch();
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
    check: "",
    approved: false,
  });
  const [error, setError] = useState();

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const timer = () => {
    setTimeout(() => {
      setError();
      return () => {
        clearTimeout(timer);
      };
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = contactData;
    if (validateEmail(email) && name.length > 2 && message.length > 10) {
      setError("true");
      console.log(contactData);
      dispatch(createContact(contactData));
      clear();
      timer();
      return;
    }
    setError("false");
    timer();
  };

  const clear = () => {
    setContactData({
      name: "",
      email: "",
      message: "",
      check: false,
    });
  };

  return (
    <form
      autoComplete="off"
      style={{
        padding: "10px",
        width: "600px",
        height: "500",
        boxShadow: "0px 18px 39.1px 6.9px rgb(224 241 255 / 34%)",
        borderRadius: "10px",
        fontFamily: "Poppins",
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h4" align="center">
        Contact Form
      </Typography>

      {error === "false" && (
        <Alert severity="error">Your message has not been sent ????!</Alert>
      )}
      {error === "true" && (
        <Alert severity="success">Your message has been sent thanks ????!</Alert>
      )}

      <Form.Group className="mb-3">
        <Input
          type="text"
          name="name"
          value={contactData.name}
          handleChange={handleChange}
          label="Enter your name (2 character at least)"
          fullWidth
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Input
          type="email"
          name="email"
          value={contactData.email}
          handleChange={handleChange}
          label="Enter your email"
          fullWidth
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <div>
        <Input
          type="text"
          multiline
          rows={4}
          style={{ width: "100%" }}
          name="message"
          value={contactData.message}
          handleChange={handleChange}
          label="Enter your message (10 characters at least)"
          fullWidth
          required
        />
      </div>

      <Form.Group className="mb-3 mt-3">
        <Form.Check
          type="checkbox"
          checked={contactData.check}
          onChange={(val) =>
            setContactData({ ...contactData, check: !contactData.check })
          }
          label="Check me out (priority)"
        />
      </Form.Group>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          type="submit"
          size="lg"
          style={{
            height: "65px",
            width: "245px",
            backgroundColor: colors.activeBtn,
            fontFamily: "Poppins",
            fontWeight: "bold",
          }}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default FormGroup;
