import React from "react";
import educationBg from "../../images/illustrations/education-bg.png";

import { Typography, Container, Grid } from "@mui/material";
import CartSkills from "../CartSkills/index.js";

const Categories = ({ type, exp, actions, sd, nolist, noCatName }) => {
  return (
    <>
      <Container
        maxWidth="lg"
        style={
          noCatName
            ? { backgroundImage: `url(${educationBg})`, marginTop: "100px" }
            : { backgroundImage: `url(${educationBg})`,  backgroundColor:'#f8f9fa', }
        }
      >
        {!noCatName ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "100px",
              marginBottom: "50px",
            }}
          >
            <Typography
              variant="h2"
              fontFamily="Poppins"
              textAlign="center"
              fontWeight="bold"
            >
              {type[0]}
            </Typography>
          </div>
        ) : (
          <></>
        )}

        {nolist ? (
          <></>
        ) : (
          <Grid
            container
            spacing={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {type[1].map((skill, index) => (
              <CartSkills
                exp={exp}
                sd={sd}
                actions={actions}
                skill={skill}
                key={index}
              />
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default Categories;
