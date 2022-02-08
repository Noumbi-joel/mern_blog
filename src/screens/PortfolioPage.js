/* import { Box, Button, ButtonGroup, Container } from "@mui/material";
*/
import React from "react";
import { Grid } from "@mui/material";

//colors
import colors from "../utils/Colors";

//components
import Slider from "../components/Slider";
import Portfolios from "../components/Portfolio";
import Banner from "../components/Banner";

//images
import steam1 from "../images/portfolio/steam/part1.png";
import steam2 from "../images/portfolio/steam/part3.png";
import agogo1 from "../images/portfolio/agogolines/agogo1.png";
import agogo4 from "../images/portfolio/agogolines/agogo4.png";
import agogo2 from "../images/portfolio/agogolines/agogo2.png";
import agogo3 from "../images/portfolio/agogolines/agogo3.png";
import agogo5 from "../images/portfolio/agogolines/agogo5.png";
import agogo6 from "../images/portfolio/agogolines/agogo6.png";

//clients
import logo1 from "../images/clients/client-logo-1.png";
import logo2 from "../images/clients/client-logo-2.png";
import logo3 from "../images/clients/client-logo-3.png";
import logo4 from "../images/clients/client-logo-4.png";
import logo5 from "../images/clients/client-logo-5.png";
import Categories from "../components/Categories";


const projects = [
  { content: "", image: steam1 },
  { content: "", image: steam2 },
/*   { content: "", image: steam3 },
 */  { content: "", image: agogo1 },
  { content: "", image: agogo4 },
  { content: "", image: agogo3},
  { content: "", image: agogo2},
  { content: "", image: agogo5},
  { content: "", image: agogo6},
];


const clientsList = [
  { image: logo1 },
  { image: logo2 },
  { image: logo3 },
  { image: logo4 },
  { image: logo5 },
];

function Portfolio() {
  return (
    <>
      <Banner bannerName="Portfolio" centered colors={colors} full />
      <Portfolios noGroupBtn={true} noCatName={true} type={["Portfolio", projects]} color={colors} />
      <Categories type={["My Clients"]} exp={true} nolist={true} />
      <Grid
        container
        spacing={2}
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <Slider clientsList={clientsList} />
      </Grid>
    </>
  );
}

export default Portfolio;

/*  */