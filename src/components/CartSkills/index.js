import React, { useState } from "react";

import {
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material";
import colors from "../../utils/Colors";

const CartSkills = ({ post, exp, actions, sd }) => {
  const [shadow, setShadow] = useState(false);
  return (
    <>
      <Grid item xs={12} sm={4}>
        <Card
          onMouseLeave={() => setShadow(false)}
          onMouseOver={() => setShadow(true)}
          style={
            !exp
              ? {
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }
              : {
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow:
                    shadow && sd
                      ? "0px 18px 39.1px 6.9px rgb(224 241 255 / 34%)"
                      : "",
                }
          }
        >
          <CardMedia
            image={post.imageUrl}
            title={post.title}
            style={{ paddingTop: "56.25%" }}
          />
          <CardContent style={{ flexGrow: 1 }}>
            {!exp ? (
              <Typography
                variant="h6"
                align="center"
                fontFamily="Poppins"
                fontWeight="bold"
              >
                {post.title}
              </Typography>
            ) : (
              <>
                <Typography
                  variant="body1"
                  style={{
                    color: colors.grey,
                    fontWeight: "400",
                    fontSize: "15px",
                    fontFamily: "Poppins",
                  }}
                  align="center"
                  fontWeight="bold"
                >
                  {post.categoryName === "Experiences" && post.debutDate + " to " + post.endDate}
                </Typography>
                <Typography
                  variant="h4"
                  style={{
                    color: colors.black,
                    fontSize: "22px",
                    fontFamily: "Poppins",
                  }}
                  align="center"
                  fontWeight="bold"
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    color: colors.textLight,
                    fontSize: "14px",
                    fontFamily: "Poppins",
                  }}
                  align="center"
                  fontWeight="bold"
                >
                  {post.paragraph}
                </Typography>
              </>
            )}
          </CardContent>
          {actions && (
            <CardActions>
              <Button
                variant="contained"
                style={{
                  backgroundColor: colors.purple,
                  fontWeight: "bold",
                  fontFamily: "Poppins",
                }}
                size="small"
                color="primary"
              >
                Read More
              </Button>
            </CardActions>
          )}
        </Card>
      </Grid>
    </>
  );
};

export default CartSkills;
