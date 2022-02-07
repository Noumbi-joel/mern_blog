import React, { useState } from "react";
import { Typography, Container, Grid } from "@mui/material";

import PortfolioProject from "../PortfolioProject";

const Portfolio = ({ type, content, colors }) => {
  return (
    <Container maxWidth="lg" style={{marginBottom:"50px"}}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
          marginBottom:'50px'
        }}
      >
        <Typography variant="h2">{type[0]}</Typography>
      </div>

      <Grid
        container
        spacing={2}
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        {type[1].map((project, index) => <PortfolioProject index={index} key={index} project={project} />)}
      </Grid>
    </Container>
  );
};

export default Portfolio;
