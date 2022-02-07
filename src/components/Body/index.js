import React from "react";

//images
import nodeJs from "../../images/skills/nodejs.png";
import reactJs from "../../images/skills/reactjs.png";
import reactNative from "../../images/skills/reactnative.png";
import redux from "../../images/skills/redux.png";
import materialUi from "../../images/skills/materialui.png";
import mongoDb from "../../images/skills/mongodb.png";
import firebase from "../../images/skills/firebase.png";
import jsonWebToken from "../../images/skills/jsonwebtoken.png";
import xamarin from "../../images/skills/xamarin.png";

import database from "../../images/services/database.png";
import web from "../../images/services/web.jpg";
import mobile from "../../images/services/phone.jfif";

import steam1 from "../../images/portfolio/steam/part1.png";
import steam2 from "../../images/portfolio/steam/part3.png";
import steam3 from "../../images/portfolio/steam/part5.png";

import agogo1 from "../../images/portfolio/agogolines/agogo1.png";
import agogo4 from "../../images/portfolio/agogolines/agogo4.png";
/* import agogo2 from "../../images/portfolio/agogolines/agogo2.png";
import agogo3 from "../../images/portfolio/agogolines/agogo3.png";
import agogo5 from "../../images/portfolio/agogolines/agogo5.png";
import agogo6 from "../../images/portfolio/agogolines/agogo6.png"; */

import agogolines from "../../images/experience/agogolines.jfif";
import chered from "../../images/experience/chered.jfif";

import basket from "../../images/blogs/basket.jpg";
import food from "../../images/blogs/food.jpg";
import tokyo from "../../images/blogs/tokyo.jpg";

import bgDots from "../../images/illustrations/bg-dots.png";
//testimonials
import client1 from "../../images/testimonials/client.jpg"



import colors from "../../utils/Colors";

//components
import Categories from "../Categories";
import Education from "../Education";
import Portfolio from "../Portfolio";
import Banner from "../Banner";
import Testimony from "../Testimony";

//clients
import logo1 from "../../images/clients/client-logo-1.png";
import logo2 from "../../images/clients/client-logo-2.png";
import logo3 from "../../images/clients/client-logo-3.png";
import logo4 from "../../images/clients/client-logo-4.png";
import logo5 from "../../images/clients/client-logo-5.png";
import { Grid } from "@mui/material";
import Slider from "../Slider";

const clientsList = [
  { image: logo1 },
  { image: logo2 },
  { image: logo3 },
  { image: logo4 },
  { image: logo5 },
];

const skills = [
  { title: "React Js", percentage: "95%", image: reactJs },
  { title: "React Native", percentage: "95%", image: reactNative },
  { title: "Redux", percentage: "95%", image: redux },
  { title: "Json Web Token", percentage: "95%", image: jsonWebToken },
  { title: "Node Js", percentage: "80%", image: nodeJs },
  { title: "Material UI", percentage: "80%", image: materialUi },
  { title: "Mongo DB", percentage: "80%", image: mongoDb },
  { title: "Firebase", percentage: "80%", image: firebase },
  { title: "Xamarin", percentage: "70%", image: xamarin },
];

const projects = [
  { content: "", image: steam1 },
  { content: "", image: steam2 },
  /* { content: "", image: steam3 }, */
  { content: "", image: agogo1},
  { content: "", image: agogo4},
  /* { content: "", image: agogo3},
  { content: "", image: agogo2},
  { content: "", image: agogo5},
  { content: "", image: agogo6}, */
];

const services = [
  {
    title:
      "Building powerful and scalable ios and android app using React Native technology",
    image: mobile,
    jobName: "Mobile Applications",
  },
  {
    title:
      "Building powerful and scalable web applications using React Library",
    image: web,
    jobName: "Web Applications",
  },
  {
    title:
      "Building efficient databases using mongoDB or Firebase and Manage it by Node Js",
    image: database,
    jobName: "Database ",
  },
];

const blogs = [
  {
    title:
      "One of the best moment in my life i'm sure that you cannot contradict me :)",
    image: food,
    jobName: "Sensational Burger 💓",
  },
  {
    title:
      "Somewhere in Asia Where people are so cool and kind",
    image: tokyo,
    jobName: "World Tripping 😃",
  },
  {
    title:
      "Somewhere in USA i like to assist sport event like basketball i'm a huge fan",
    image: basket,
    jobName: "World Event 🏀",
  },
];

const experiences = [
  {
    title: "Agogolines",
    duration: "Sept 2021- Nov 2021",
    jobName: "React Native Developer",
    image: agogolines,
  },
  {
    title: "Chered Engineering",
    duration: "Jun 2020- Jul 2020",
    jobName: "Php Developer",
    image: chered,
  },
];
const testimonies = [
  {
    msg: "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sitconsectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sitconsectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sitconsectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sitconsectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit",
    clientImg: client1,
    clientName: "Djibril Nakam Benjamin",
    clientRes: "CEO, Agogolines",
  },
];

const educations = [
  {
    school: "Government Bilingual High School Edea",
    year: "2021",
    diploma: "Higher Secondary Certificate",
  },
  {
    school: "university institute of the coast",
    year: "2021",
    diploma: "Advanced Technician's Certificate",
  },
  {
    school: "university institute of the coast",
    year: "2022",
    diploma: "Bachelor of Technology Software Engineering",
  },
];

const Body = (props) => {
  return (
    <>
      <Banner colors={colors} />
      <Categories type={["Skills", skills]} exp={false} />
      <Categories type={["Experiences", experiences]} exp={true} />
      <Education
        educations={["educations", educations]}
        bgDots={bgDots}
        colors={colors}
      />
      <Categories type={["Services", services]} exp={true} />
      <Portfolio type={["Portfolio", projects]} color={colors} />
      <Testimony testimonies={testimonies} colors={colors} />
      <Grid
        container
        spacing={2}
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >          
        <Slider clientsList={clientsList} />
      </Grid>
      <Categories type={["Blogs", blogs]} exp={true} actions />
    </>
  );
};

export default Body;
