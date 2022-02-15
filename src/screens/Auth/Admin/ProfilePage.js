import React, { useState } from "react";
import { Alert, Button, Container, Grid, TextField } from "@mui/material";
import Dashboard from "./DashboardPage";
import colors from "../../../utils/Colors";
import { Form } from "react-bootstrap";
import Header from "../../../components/Admin/Header";

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    city: "",
    region: "",
    zip: "",
    description: "",
  });

  const [error, setError] = useState();

  const handleChange = (val, type) => {
    const res = val.target.value;
    setUserData((prevState) => {
      return { ...prevState, [type]: res };
    });
  };

  const [updateProfile, setUpdateProfile] = useState(false);

  const handleSubmit = (e) => {};

  return (
    <Dashboard>
      <Header headerName="Admin Profile Informations" />
      <Container maxWidth="lg" align="center">
        <form
          autoComplete="off"
          style={{
            padding: "10px",
            height: "500",
            boxShadow: "0px 18px 39.1px 6.9px rgb(224 241 255 / 34%)",
            borderRadius: "10px",
            fontFamily: "Poppins",
          }}
          onSubmit={handleSubmit}
        >
          {error === "false" && (
            <Alert severity="error">Your message has not been sent 😢!</Alert>
          )}
          {error === "true" && (
            <Alert severity="success">
              Your message has been sent thanks 😃!
            </Alert>
          )}

          <Grid container spacing="5">
            <Grid item xs={12} sm={6}>
              <Form.Group className="mb-3">
                <TextField
                  type="text"
                  value={userData.firstName}
                  onChange={(val) => handleChange(val, "firstName")}
                  label="Enter your firstName (2 character at least)"
                  fullWidth
                  required
                />
              </Form.Group>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Form.Group className="mb-3">
                <TextField
                  type="text"
                  label="Enter your lastName"
                  fullWidth
                  required
                  value={userData.lastName}
                  onChange={(val) => handleChange(val, "lastName")}
                />
              </Form.Group>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Form.Group className="mb-3">
                <TextField
                  type="email"
                  label="Enter your email"
                  fullWidth
                  required
                  value={userData.email}
                  onChange={(val) => handleChange(val, "email")}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Form.Group className="mb-3">
                <TextField
                  type="password"
                  label="Enter your password"
                  fullWidth
                  required
                  value={userData.password}
                  onChange={(val) => handleChange(val, "password")}
                />
              </Form.Group>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Form.Group className="mb-3">
                <TextField
                  type="text"
                  label="Enter your address"
                  fullWidth
                  required
                  value={userData.address}
                  onChange={(val) => handleChange(val, "address")}
                />
              </Form.Group>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Form.Group className="mb-3">
                <TextField
                  type="text"
                  label="Enter your city"
                  fullWidth
                  required
                  value={userData.city}
                  onChange={(val) => handleChange(val, "city")}
                />
              </Form.Group>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Form.Group className="mb-3">
                <TextField
                  type="text"
                  label="Enter your region"
                  fullWidth
                  required
                  value={userData.region}
                  onChange={(val) => handleChange(val, "region")}
                />
              </Form.Group>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Form.Group className="mb-3">
                <TextField
                  type="text"
                  label="Enter your zip"
                  fullWidth
                  required
                  value={userData.zip}
                  onChange={(val) => handleChange(val, "zip")}
                />
              </Form.Group>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                multiline
                rows={4}
                style={{ width: "100%" }}
                label="Enter your message"
                fullWidth
                required
                type="text"
                value={userData.description}
                onChange={(val) => handleChange(val, "description")}
              />
            </Grid>
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Button
              variant="contained"
              type="submit"
              style={{
                height: "65px",
                width: "245px",
                backgroundColor: colors.activeBtn,
                fontFamily: "Poppins",
                fontWeight: "bold",
              }}
            >
              {updateProfile ? "Update Account":"Create Account"}
            </Button>
          </div>
        </form>
      </Container>
    </Dashboard>
  );
};

export default ProfilePage;
