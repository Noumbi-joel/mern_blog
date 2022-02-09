import React from "react";
import educationBg from "../../images/illustrations/bg-dots.png";

import { Container, Grid, Typography } from "@mui/material";
import {
  HomeRounded,
  EmailRounded,
  PhoneIphoneRounded,
} from "@mui/icons-material";

//Colors
import colors from "../../utils/Colors";

//components
import Categories from "../Categories";

import Form from "../Form"

const footerInfos = [
  { type: "Email", text: "joelnoumbi28@gmail.com" },
  { type: "Phone", text: "+237670398582" },
  { type: "Address", text: "logbessou, Douala, Littoral, Cameroun" },
];

const Footer = () => {
  return (
    <>
      <Categories
        style={{ marginTop: "100px", textAlign: "center" }}
        type={["Contact Infos"]}
        nolist={true}
      />
      <Container
        maxWidth="xl"
        style={{ backgroundImage: `url(${educationBg})` }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Form colors={colors} />
        </div>
      </Container>

      <div
        style={{
          backgroundColor: colors.bgDark,
        }}
      >
        <Grid
          container
          align="center"
          style={{ height: "200px", paddingTop: "50px" }}
        >
          {footerInfos.map((info, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {info.type === "Email" && (
                    <EmailRounded style={{ color: colors.textLight }} />
                  )}
                  {info.type === "Phone" && (
                    <PhoneIphoneRounded style={{ color: colors.textLight }} />
                  )}
                  {info.type === "Address" && (
                    <HomeRounded style={{ color: colors.textLight }} />
                  )}
                  <Typography
                    style={{
                      color: colors.textLight,
                      fontFamily: "Poppins",
                      fontSize: "18px",
                    }}
                  >
                    {info.type}
                  </Typography>
                </div>
                <Typography
                  key={index}
                  style={{
                    color: colors.white,
                    fontFamily: "Poppins",
                    fontSize: "18px",
                  }}
                >
                  {info.text}
                </Typography>
              </>
            </Grid>
          ))}
        </Grid>
        <Grid style={{ height: "120px", paddingTop: "50px" }} align="center">
          <Typography
            style={{
              color: colors.footer,
              fontFamily: "Poppins",
              fontSize: "15px",
            }}
          >
            Copyright ©2022 Designed & Developed by Noumbi Kwebiteu Joel Yvan
          </Typography>
        </Grid>
      </div>
    </>
  );
};

export default Footer;
