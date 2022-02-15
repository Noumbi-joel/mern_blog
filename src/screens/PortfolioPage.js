/* import { Box, Button, ButtonGroup, Container } from "@mui/material";
 */
import React, { useEffect } from "react";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";

//colors
import colors from "../utils/Colors";

//components
import Slider from "../components/Slider";
import Portfolios from "../components/Portfolio";
import Banner from "../components/Banner";

import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "../redux/actions/post";
import Categories from "../components/Categories";

function Portfolio() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      <Banner bannerName="Portfolio" centered colors={colors} full />
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
          <Portfolios
            noGroupBtn={true}
            noCatName={true}
            type={[posts[4].name, posts[4].posts]}
            color={colors}
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
    </>
  );
}

export default Portfolio;

/*  */
