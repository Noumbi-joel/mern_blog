import { Container, Typography } from "@mui/material";
import React from "react";

const ErrorPage = () => {
  return (
    <Container maxWidth="xs" style={{ marginTop: '150px'}}>
      <Typography align="center">404 Page not</Typography>
      <Typography align="center">Sorry this page does'nt exist 🙃</Typography>
    </Container>
  );
};

export default ErrorPage;
