import React from "react";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { Typography, Container, Grid } from "@mui/material";

import Categories from "../Categories";

const Education = ({ educations, colors, bgDots }) => {
  return (
    <>
      <Categories type={["Education"]} nolist={true} />
      <Container maxWidth="lg" style={{ backgroundImage: `url(${bgDots})` }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          style={{ display: "flex", justifyContent: "center" }}
          columns={{ xs: 3, sm: 6, md: 12 }}
        >
          {educations[1].map((education, index) => (
            <Grid
              item
              xs={2}
              sm={6}
              md={6}
              key={index}
              style={{
                paddingTop: "0px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: colors.white,
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  marginRight: "5px",
                  boxShadow: "0px 18px 39.1px 6.9px rgb(224 241 255 / 34%)",
                }}
              >
                <MilitaryTechIcon />
              </div>
              <div>
                <Typography paragraph fontFamily="Poppins" color={colors.black}>
                  {education.year}
                </Typography>
                <Typography
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                  }}
                  variant="h4"
                  color={colors.black}
                  gutterBottom
                >
                  {education.diploma}
                </Typography>
                <Typography
                  paragraph
                  style={{
                    fontSize: "15px",
                    fontWeight: "400",
                    fontFamily: "Poppins",
                  }}
                  variant="h4"
                  color={colors.textLight}
                >
                  {education.school}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Education;
