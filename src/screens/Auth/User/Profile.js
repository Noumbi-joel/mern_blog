import React, { useEffect, useState } from "react";
import {
  Alert,
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Input from "../../../components/Input";
import colors from "../../../utils/Colors";

const Profile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userProfile = useSelector((state) => state.user);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {};

  console.log(userProfile);
  return (
    <div>
      <Container maxWidth="lg" style={{ marginTop: "120px" }}>
        <Typography variant="h6" fontFamily="Poppins">
          User Profile Informations
        </Typography>
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
              width: '100px',
              height: '100px',
            }}
          >
            <img src={userProfile?.imageUrl} width="100%" height="100%" alt="" />
          </Avatar>
          <form
            style={{ width: "100%", marginTop: "5px" }}
            onSubmit={handleSubmit}
          >
            {error === "true" && (
              <Alert severity="error">Failed while updating 😢!</Alert>
            )}
            {error === "good" && (
              <Alert severity="success">successfully updated 😃!</Alert>
            )}
            <Grid container spacing={2}>
              <>
                <Input
                  disabled
                  value={userProfile?.firstName}
                  name="firstName"
                  /* label="First Name" */
                  autoFocus
                  half
                  holder="Must be 2 characters at least"
                />
                <Input
                  disabled
                  value={userProfile?.lastName}
                  name="lastName"
                  /* label="Last Name" */
                  half
                  holder="Must be 2 characters at least"
                />
              </>
              <Input
                disabled
                value={userProfile?.email}
                name="email"
                /* label="Email Address" */
                type="email"
                holder=""
              />
              <Input
                disabled
                value={userProfile?.password}
                name="password"
                /* label="Password" */
                type={showPassword ? "text" : "password"}
                holder="Must match with the bottom one"
              />
              {/* {signup && (
                <>
                  <Input
                    value={userProfile.confirmPassword}
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
                        setuserProfile({ ...userProfile, imageUrl: base64 })
                      }
                    />
                  </div>
                </>
              )} */}
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Profile;
