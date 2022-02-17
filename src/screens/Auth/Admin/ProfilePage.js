import React, { useEffect, useState } from "react";
import { Alert, Button, Container, Grid } from "@mui/material";
import Dashboard from "./DashboardPage";
import colors from "../../../utils/Colors";
import { Form } from "react-bootstrap";
import Header from "../../../components/Admin/Header";

import Input from "../../../components/Input";

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

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const [error, setError] = useState();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

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
                <Input
                  /* value={userData.firstName} */
                  value={user.result.firstName}
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  fullWidth
                  required
                  type="text"
                />
              </Form.Group>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Form.Group className="mb-3">
                <Input
                  value={user.result.lastName}
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  autoFocus
                  fullWidth
                  required
                  type="text"
                />
              </Form.Group>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Form.Group>
                <Input
                  value={user.result.email}
                  name="email"
                  label="Email Address"
                  handleChange={handleChange}
                  autoFocus
                  fullWidth
                  type="email"
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Form.Group className="mb-3">
                <Input
                  value={userData.password}
                  name="password"
                  label="Password"
                  handleChange={handleChange}
                  autoFocus
                  fullWidth
                  type="password"
                  required
                />
              </Form.Group>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Form.Group className="mb-3">
                <Input
                  value={user.result.address}
                  name="address"
                  label="Address Location"
                  handleChange={handleChange}
                  autoFocus
                  fullWidth
                  type="text"
                  required
                />
              </Form.Group>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Form.Group className="mb-3">
                <Input
                  value={user.result.city}
                  name="city"
                  label="City"
                  handleChange={handleChange}
                  autoFocus
                  fullWidth
                  type="text"
                  required
                />
              </Form.Group>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Form.Group className="mb-3">
                <Input
                  value={user.result.region}
                  name="region"
                  label="Region"
                  handleChange={handleChange}
                  autoFocus
                  fullWidth
                  type="text"
                  required
                />
              </Form.Group>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Form.Group className="mb-3">
                <Input
                  value={user.result.zip}
                  name="zip"
                  label="Zip Code"
                  handleChange={handleChange}
                  autoFocus
                  fullWidth
                  type="text"
                  required
                />
              </Form.Group>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Input
                value={user.result.description}
                multiline
                rows={4}
                name="description"
                label="Enter your description"
                handleChange={handleChange}
                autoFocus
                fullWidth
                type="text"
                required
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
              Update Account
            </Button>
          </div>
        </form>
      </Container>
    </Dashboard>
  );
};

export default ProfilePage;
