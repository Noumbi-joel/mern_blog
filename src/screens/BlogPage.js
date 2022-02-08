import React from "react";
import { Grid } from "@mui/material";

//components
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Slider from "../components/Slider";

//colors
import colors from "../utils/Colors";

//blog
import basket from "../images/blogs/basket.jpg";
import food from "../images/blogs/food.jpg";
import tokyo from "../images/blogs/tokyo.jpg";
import chillOut from "../images/blogs/chillout.jpg";
import coding from "../images/blogs/coding.jpg";
import workout from "../images/blogs/workout.jpg";

//clients
import logo1 from "../images/clients/client-logo-1.png";
import logo2 from "../images/clients/client-logo-2.png";
import logo3 from "../images/clients/client-logo-3.png";
import logo4 from "../images/clients/client-logo-4.png";
import logo5 from "../images/clients/client-logo-5.png";

const blogs = [
  {
    title:
      "One of the best moment in my life i'm sure that you cannot contradict me :)",
    image: food,
    jobName: "Sensational Burger 💓",
  },
  {
    title: "Somewhere in Asia Where people are so cool and kind.",
    image: tokyo,
    jobName: "World Tripping 😃",
  },
  {
    title:
      "Somewhere in USA i like to assist sport event like basketball i'm a huge fan.",
    image: basket,
    jobName: "World Event 🏀",
  },
  {
    title:
      "I really like my job and the things around for me it's simply the best job ever.",
    image: coding,
    jobName: "Obsession (Never forget) 😍",
  },
  {
    title:
      "I mean enjoy your life and you'll discover some rare and golden things...",
    image: chillOut,
    jobName: "Be sometimes crazy 😁",
  },
  {
    title:
      "Life will be long if you do this seriously and maintain your health.",
    image: workout,
    jobName: "Take care of you 😣",
  },
];

const clientsList = [
  { image: logo1 },
  { image: logo2 },
  { image: logo3 },
  { image: logo4 },
  { image: logo5 },
];

function Blog() {
  return (
    <div>
      <Banner bannerName="Blogs" centered colors={colors} full />
      <Categories type={["Blogs", blogs]} exp={true} nolist={false} noCatName={true} actions sd={true} />
      <Categories type={["My Clients"]} exp={true} nolist={true} />
      <Grid
        container
        spacing={2}
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <Slider clientsList={clientsList} />
      </Grid>
    </div>
  );
}

export default Blog;
