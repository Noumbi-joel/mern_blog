import React from "react";
import { Container, Grid, ButtonGroup, Button, Box } from "@mui/material";

import PortfolioProject from "../PortfolioProject";
import Categories from "../Categories";

const buttons = [
  { title: "All" },
  { title: "UI/UX" },
  { title: "BRANDING" },
  { title: "ILLUSTRATION" },
];

const Portfolio = ({ type, content, colors, noCatName, noGroupBtn }) => {
  return (
    <>
      <Categories type={["Portfolio"]} noCatName={noCatName} nolist={true} />
      <Container maxWidth="lg" style={{ marginBottom: "50px" }}>
        {noGroupBtn && (
          <div style={{ marginBottom: "50px" }}>
            <ButtonGroup
              style={{ width: "100%" }}
              variant="contained"
              aria-label="outlined primary button group"
            >
              {buttons.map((btn, index) => (
                <Button style={{ width: "100%" }} key={index}>
                  {btn.title}
                </Button>
              ))}
            </ButtonGroup>
          </div>
        )}
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {type[1].map((project, index) => (
            <PortfolioProject index={index} key={index} project={project} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Portfolio;
