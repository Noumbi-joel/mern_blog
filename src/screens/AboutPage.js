import React from "react";

//colors
import colors from "../utils/Colors";

//components
import Slider from "../components/Slider";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

//mui
import { Box, Grid, Typography } from "@mui/material";

//images
import author from "../images/about/author.jpg";
import signature from "../images/about/signature.png";
import design from "../images/about/design.jpg";
import deliver from "../images/about/deliver.jpg";
import plan from "../images/about/plan.jpg";

//clients
import logo1 from "../images/clients/client-logo-1.png";
import logo2 from "../images/clients/client-logo-2.png";
import logo3 from "../images/clients/client-logo-3.png";
import logo4 from "../images/clients/client-logo-4.png";
import logo5 from "../images/clients/client-logo-5.png";

const process = [
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: plan,
    jobName: "Research and Plan",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: design,
    jobName: "Design and Develop",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: deliver,
    jobName: "Deliver",
  },
];

const clientsList = [
  { image: logo1 },
  { image: logo2 },
  { image: logo3 },
  { image: logo4 },
  { image: logo5 },
];


function About() {
  return (
    <div>
      <Banner bannerName="About Me" colors={colors} full />
      <Grid align="center" pt={3}>
        <Grid container direction="row" spacing={20} maxWidth="lg">
          <Grid item xs={12} sm={6}>
            <Box pl={5} pr={5}>
              <Typography
                variant="h6"
                paragraph
                align="justify"
                style={{
                  fontWeight: "400",
                  fontSize: "15px",
                  fontFamily: "Poppins",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
              <Typography
                variant="h6"
                paragraph
                align="justify"
                style={{
                  fontWeight: "400",
                  fontSize: "15px",
                  fontFamily: "Poppins",
                }}
              >
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </Typography>
              <Typography
                variant="h6"
                paragraph
                align="justify"
                style={{
                  fontWeight: "400",
                  fontSize: "15px",
                  fontFamily: "Poppins",
                }}
              >
                Deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container direction="column">
              <Box>
                <img src={author} alt="author" width="280px" height="400px" />
                <img
                  src={signature}
                  alt="author"
                  width="200px"
                  height="100px"
                />
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  fontFamily="Poppins"
                  fontSize="22px"
                >
                  Noumbi Joel Yvan
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Categories type={["Work Process", process]} exp={true} sd={true} />
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

export default About;
