import React, {useState} from "react";

import {
    Typography,
    Container,
    Button,
    Grid,
    Card,
    CardContent,
    CardMedia,
  } from "@mui/material";
import CartSkills from "../CartSkills.js";

const Categories = ({ type, exp }) => {
  return (
    <>
      <Container maxWidth="lg">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "100px",
            marginBottom: "50px",
          }}
        >
          <Typography variant="h2">{type[0]}</Typography>
        </div>

        <Grid container spacing={4}>
          {type[1].map((skill, index) => (
            <CartSkills exp skill={skill} key={index} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Categories;
