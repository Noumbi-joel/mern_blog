import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  Avatar,
  Paper,
  Alert,
} from "@mui/material";

import FileBase from "react-file-base64";
import { Lock } from "@mui/icons-material";

import Input from "../../components/Input";

import colors from "../../utils/Colors";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

//actions
import { createUser } from "../../redux/actions/user";

const Auth = ({ signup }) => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const [error, setError] = useState();

  const timer = () => {
    setTimeout(() => {
      setError();
      return () => {
        clearTimeout(timer);
      };
    }, 3000);
  };

  const clear = () => {
    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      imageUrl: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = userData;
    if (
      !validateEmail(email) ||
      firstName.length < 2 ||
      lastName.length < 2 ||
      password.length < 4 ||
      password !== confirmPassword
    ) {
      setError("true");
      return timer();
    }
    dispatch(createUser(userData));
    setError("good");
    clear();
    timer();
  };

  return (
    <Container component="main" style={{ marginTop: "120px" }} maxWidth="xs">
      <Paper
        style={{
          marginTop: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "15px",
        }}
        elevation={3}
      >
        <Avatar
          style={{
            margin: "5px",
            backgroundColor: colors.purple,
          }}
        >
          <Lock />
        </Avatar>
        <Typography component="h1" variant="h5">
          {signup ? "Sign up" : "Sign in"}
        </Typography>
        <form
          style={{ width: "100%", marginTop: "5px" }}
          onSubmit={handleSubmit}
        >
          {error === "true" && (
            <Alert severity="error">You cannot be registered 😢!</Alert>
          )}
          {error === "good" && (
            <Alert severity="success">
              You've been registered successfully 😃!
            </Alert>
          )}
          <Grid container spacing={2}>
            {signup && (
              <>
                <Input
                  value={userData.firstName}
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                  holder="Must be 2 characters at least"
                />
                <Input
                  value={userData.lastName}
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                  holder="Must be 2 characters at least"
                />
              </>
            )}
            <Input
              value={userData.email}
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
              holder=""
            />
            <Input
              value={userData.password}
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
              holder="Must match with the bottom one"
            />
            {signup && (
              <>
                <Input
                  value={userData.confirmPassword}
                  name="confirmPassword"
                  label="Repeat Password"
                  handleChange={handleChange}
                  type="password"
                  holder="Must match with the top one"
                />
                <div style={{ marginLeft: "14px", marginTop: "14px" }}>
                  <Typography variant="body1">Pick up your image</Typography>
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setUserData({ ...userData, imageUrl: base64 })
                    }
                  />
                </div>
              </>
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            /* style={{color:colors.purple}} */
            style={{ margin: "15px 0 2px", background: colors.purple }}
          >
            {signup ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              {signup ? (
                <Link
                  to="/auth/signin"
                  style={{
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    color: colors.purple,
                  }}
                >
                  <Typography component="h1" variant="h6">
                    Sign in ?
                  </Typography>
                </Link>
              ) : (
                <Link
                  to="/auth/signup"
                  style={{
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    color: colors.purple,
                  }}
                >
                  <Typography component="h1" variant="h6">
                    Sign up ?
                  </Typography>
                </Link>
              )}
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;

/*  googleButton: {
    marginBottom: theme.spacing(2),
  }, */
