import React from "react";

import { Typography, Container, Button, Grid, Slider } from "@mui/material";

//images
import leafYellow from "../../images/illustrations/leaf-yellow.png";
import leafOrange from "../../images/illustrations/leaf-orange.png";
import leafBg from "../../images/illustrations/leaf-bg.png";
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
  FormatQuoteSharp,
} from "@mui/icons-material";

const  Testimony = ({ testimonies, colors }) => {
  return (
    <div
      style={{
        backgroundColor: colors.purple,
        backgroundImage: `url(${leafBg})`,
        paddingTop: "50px",
        paddingBottom: "25px"
      }}
    >
      <Container maxWidth="lg" align="center">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
          <Typography color={colors.white} fontFamily="Poppins" variant="h4">
            TESTIMONIALS
          </Typography>
      </div>

        <Typography align="center" fontFamily="Poppins" color={colors.white} variant="h2">
          <FormatQuoteSharp style={{ fontSize: "80px" }} />
        </Typography>
        {testimonies.map((testimony, index) => (
          <div key={index}>
            <Typography
              align="center"
              color={colors.white}
              variant="h6"
              style={{
                fontWeight: "400",
                fontSize: "15px",
                paddingTop: "10px",
                fontFamily:"Poppins",
                textAlign: "justify"
              }}
            >
              {testimony.msg}
            </Typography>
            <img
              src={testimony.clientImg}
              alt="client"
              style={{ borderRadius: "100%", paddingTop: "20px" }}
              height="200px"
              width="200px"
            />
            <Typography
              align="center"
              color={colors.white}
              variant="h6"
              style={{
                paddingTop: "10px",
                fontFamily:"Poppins" 
              }}
            >
              {testimony.clientName}
            </Typography>
            <Typography
              align="center"
              color={colors.grey}
              variant="h6"
              style={{
                paddingTop: "5px",
                fontSize: "16px",
                fontFamily:"Poppins" 
              }}
            >
              {testimony.clientRes}
            </Typography>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Testimony;
