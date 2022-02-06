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
import colors from "../../utils/Colors";

const CartSkills = ({ skill, exp }) => {
  return (
    <>
      <Grid item xs={12} sm={4} >
        <Card
          style={!exp ? {
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }:
          {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            boxShadow: "none"
          }
        }
        >
          <CardMedia
            image={skill.image}
            title={skill.school}
            style={{ paddingTop: "50%" }}
          />
          <CardContent style={{ flexGrow: 1 }}>
            {!exp ?
              <Typography variant="h6" align="center" fontWeight="bold">
                {skill.title} ({skill.percentage})
              </Typography>
              :
              <>
                <Typography variant="body1" style={{color: colors.grey, fontWeight: '400', fontSize: '15px'}} align="center" fontWeight="bold">
                  {skill.duration}
                </Typography>
                <Typography variant="h4" style={{color: colors.black, fontSize: '22px'}} align="center" fontWeight="bold">
                  {skill.jobName}
                </Typography>
                <Typography variant="h6" style={{color: colors.textLight, fontSize: '14px'}} align="center" fontWeight="bold">
                  {skill.title}
                </Typography>
              </>
            }
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default CartSkills;
