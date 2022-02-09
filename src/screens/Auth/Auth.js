import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  Avatar,
  Paper,
} from "@mui/material";

/* import { Link } from "react-router-dom"
 */ import { Lock } from "@mui/icons-material";

import Input from "../../components/Input";
import colors from "../../utils/Colors";

import Icon from "../../components/Icons/google";

//google signin
import { GoogleLogin } from "react-google-login";

const Login = () => {
  const handleSubmit = () => {};

  const handleChange = () => {};

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const switchMode = () => {
    setIsSignup(!isSignup);
  };

  const googleSuccess = async (res) => {
    const result = res?.projectObj;
    const token = res?.tokenId;

    try{
      console.log("i'm connecting", result);
    }catch(err){
      console.log("An error occured gs:", err);
    }
  };

  const googleFailure = (err) => {
    console.log(err);
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
          {isSignup ? "Sign up" : "Sign in"}
        </Typography>
        <form
          style={{ width: "100%", marginTop: "5px" }}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            /* style={{color:colors.purple}} */
            style={{ margin: "15px 0 2px", background: colors.purple }}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>

          <GoogleLogin
            clientId="474863426254-g6kc8i62sq5rphr7gi3moq5vvdbkj5mm.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                style={{
                  backgroundColor: colors.white,
                  color: colors.purple,
                  marginTop: "10px",
                  marginBottom: "10px",
                  width: "100%",
                }}
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy={"single_host_origin"}
                responseType="code,token"
              >
                Google Sign in
              </Button>
            )}
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode} style={{ color: colors.purple }}>
                {isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;

/*  googleButton: {
    marginBottom: theme.spacing(2),
  }, */
