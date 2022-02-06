import React from "react";

import {
  Typography,
  Container,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

//images
import leafYellow from "../../images/illustrations/leaf-yellow.png";
import leafOrange from "../../images/illustrations/leaf-orange.png";
import leafPinkRound from "../../images/illustrations/leaf-pink-round.png";
import leafCyan from "../../images/illustrations/leaf-cyan-2.png";
import leafBg from "../../images/illustrations/leaf-bg.png";
import dotOrange from "../../images/illustrations/dots-orange.png";
import dotGroupOrange from "../../images/illustrations/dots-group-orange.png";

import nodeJs from "../../images/skills/nodejs.png";
import reactJs from "../../images/skills/reactjs.png";
import reactNative from "../../images/skills/reactnative.png";
import redux from "../../images/skills/redux.png";
import materialUi from "../../images/skills/materialui.png";
import mongoDb from "../../images/skills/mongodb.png";
import firebase from "../../images/skills/firebase.png";
import jsonWebToken from "../../images/skills/jsonwebtoken.png";
import xamarin from "../../images/skills/xamarin.png";

import agogolines from "../../images/experience/agogolines.jfif";
import chered from "../../images/experience/chered.jfif";

import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";
import colors from "../../utils/Colors";

//components
import Categories from "../Categories";

const skills = [
  { title: "React Js", percentage: "95%", image: reactJs },
  { title: "React Native", percentage: "95%", image: reactNative },
  { title: "Redux", percentage: "95%", image: redux },
  { title: "Json Web Token", percentage: "95%", image: jsonWebToken },
  { title: "Node Js", percentage: "80%", image: nodeJs},
  { title: "Material UI", percentage: "80%", image: materialUi },
  { title: "Mongo DB", percentage: "80%", image: mongoDb },
  { title: "Firebase", percentage: "80%", image: firebase },
  { title: "Xamarin", percentage: "70%", image: xamarin },
];

const experiences = [
  {title: "Agogolines", duration: "Sept 2021- Nov 2021", jobName: "React Native Developer", image: agogolines},
  {title: "Chered Engineering", duration: "Jun 2020- Jul 2020", jobName: "Php Developer", image: chered}
];

const educations = [
  {school: "Government Bilingual High School Edea", year: "2021", diploma: "higher secondary certificate"},
  {school: "university institute of the coast", year: "2021", diploma: "advanced technician's certificate"},
  {school: "university institute of the coast", year: "2022", diploma: "Bachelor of Technology"}
]

const Banner = (props) => {
  return (
    <>
      <div
        style={{
          backgroundColor: colors.purple,
        }}
      >
        <Container maxWidth="lg" align="center">
          <Typography
            align="left"
            paddingTop={15}
            color={colors.white}
            variant="h2"
          >
            Hi! I'm
          </Typography>
          <Typography align="left" color={colors.white} variant="h2">
            Joel Yvan
          </Typography>
          <Typography
            align="left"
            color={colors.white}
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
          style={{ fontSize: "22px", marginTop: "20px" }}
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

      <Categories type={skills} exp={false} />
      <Categories type={experiences} exp={true} />
      {/* <Categories type={["education", skills]}  /> */}

      
    </>
  );
};

export default Banner;
