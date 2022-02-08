import React from "react";
import educationBg from "../../images/illustrations/bg-dots.png";

import { Button, Container, Grid, Typography } from "@mui/material";
import {
  HomeRounded,
  EmailRounded,
  PhoneIphoneRounded,
} from "@mui/icons-material";

//Colors
import colors from "../../utils/Colors";

import { Form } from "react-bootstrap";

//components
import Categories from "../Categories";

const footerInfos = [
  { type: "Email", text: "joelnoumbi28@gmail.com" },
  { type: "Phone", text: "+237670398582" },
  { type: "Address", text: "logbessou, Douala, Littoral, Cameroun" },
];

const Footer = () => {
  return (
    <>
      <Categories
        style={{ marginTop: "100px", textAlign: 'center' }}
        type={["Contact Infos"]}
        nolist={true}
      />
      <Container
        maxWidth="xl"
        style={{ backgroundImage: `url(${educationBg})` }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Form
            className="p-3"
            style={{
              width: "600px",
              height: "500",
              boxShadow: "0px 18px 39.1px 6.9px rgb(224 241 255 / 34%)",
              borderRadius: "10px",
              fontFamily: "Poppins",
            }}
          >
            <Typography variant="h4" align="center">
              Contact Form
            </Typography>
            <Form.Group className="mb-3">
              <Typography variant="h6">Full Name</Typography>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Typography variant="h6">Email address</Typography>
              <Form.Control
                size="lg"
                type="email"
                placeholder="Enter your email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Typography variant="h6">Type message here</Typography>
              <Form.Control
                size="lg"
                as="textArea"
                rows={3}
                type="text"
                placeholder="Enter your message"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                size="lg"
                style={{
                  height: "65px",
                  width: "245px",
                  backgroundColor: colors.activeBtn,
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                }}
              >
                Submit
              </Button>
            </div>
          </Form>
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
