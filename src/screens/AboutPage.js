import React, { useEffect } from "react";

//colors
import colors from "../utils/Colors";

import signature from "../images/about/signature.png";

//components
import Slider from "../components/Slider";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

//mui
import { Box, CircularProgress, Grid, Typography } from "@mui/material";

//images
import author from "../images/blogs/lijay.jpg";

import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "../redux/actions/post";

function About() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

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

      {posts.length <= 0 && (
        <Box textAlign="center">
          <CircularProgress />
          <Typography variant="body1" fontFamily="Poppins">
            Wait a moment please...
          </Typography>
        </Box>
      )}

      {posts.length > 0 && (
        <>
          <Categories
            type={[posts[7].name, posts[7].posts]}
            exp={true}
            sd={true}
          /> 
          <Categories type={["My Clients"]} exp={true} nolist={true} />
          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <Slider clientsList={posts[5].posts} />
          </Grid>
        </>
      )}
    </div>
  );
}

export default About;
