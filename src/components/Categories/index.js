import React, {useState} from "react";
import educationBg from "../../images/illustrations/education-bg.png";

import {
    Typography,
    Container,
    Grid,
  } from "@mui/material";
import CartSkills from "../CartSkills.js";

const Categories = ({ type, exp, actions }) => {
  return (
    <>
      <Container maxWidth="lg" style={{ backgroundImage: `url(${educationBg})`}}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "100px",
            marginBottom: "50px",
          }}
        >
          <Typography variant="h2" fontFamily="Poppins">{type[0]}</Typography>
        </div>

        <Grid container spacing={4} style={{display: "flex", justifyContent: "center" }}>
          {type[1].map((skill, index) => (
            <CartSkills exp={exp} actions={actions} skill={skill} key={index} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Categories;
