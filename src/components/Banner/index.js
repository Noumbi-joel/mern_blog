import React from "react";

import { Typography, Container, Button } from "@mui/material";

//images
import leafYellow from "../../images/illustrations/leaf-yellow.png";
import leafOrange from "../../images/illustrations/leaf-orange.png";
import leafPinkRound from "../../images/illustrations/leaf-pink-round.png";
import leafCyan from "../../images/illustrations/leaf-cyan-2.png";
/* import leafBg from "../../images/illustrations/leaf-bg.png";
import dotOrange from "../../images/illustrations/dots-orange.png";
import dotGroupOrange from "../../images/illustrations/dots-group-orange.png"; */

import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";

const Banner = ({colors}) => {
  return (
    <>
      <div
      className="banner"
        style={{
          backgroundColor: colors.purple,
        }}
      >
        <Container maxWidth="lg" align="center">
          <Typography
            align="left"
            paddingTop={15}
            color={colors.white}
            fontFamily="Poppins" 
            variant="h2"
          >
            Hi! I'm
          </Typography>
          <Typography align="left" fontFamily="Poppins"  color={colors.white} variant="h2">
            Joel Yvan
          </Typography>
          <Typography
            align="left"
            color={colors.white}
            fontFamily="Poppins" 
            variant="h2"
            gutterBottom
          >
            Web and Mobile Developer
          </Typography>
          <img src={leafYellow} alt="images" width="100px" />
          <img src={leafOrange} alt="images" width="100px" />
          <img src={leafCyan} alt="images" width="100px" />
          <img src={leafPinkRound} alt="images" width="100px" />
        </Container>

        <div
          style={{
            flexDirection: "column",
            paddingLeft: "15px",
            display: "flex",
            paddingBottom: "20px",
          }}
        >
          <FacebookOutlined style={{ color: colors.white }} />
          <Instagram style={{ color: colors.white, paddingTop: "5" }} />
          <LinkedIn style={{ color: colors.white, paddingTop: "5" }} />
          <GitHub style={{ color: colors.white, paddingTop: "5" }} />
        </div>
      </div>

      <Container maxWidth="sm">
        <Typography
          variant="h5"
          style={{ fontSize: "22px", marginTop: "20px", fontFamily:"Poppins"  }}
          paragraph
          align="center"
          color={colors.black}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Typography>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
          fontFamily="Poppins" 
            variant=""
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              color: colors.purple,
            }}
          >
            Know More
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Banner;
