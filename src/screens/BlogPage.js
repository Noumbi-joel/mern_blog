import React, { useEffect } from "react";
import { CircularProgress, Grid, Typography } from "@mui/material";

//components
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Slider from "../components/Slider";

//colors
import colors from "../utils/Colors";

import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "../redux/actions/post";
import { Box } from "@mui/system";

function Blog() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <Banner bannerName="Blogs" centered colors={colors} full />
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
            type={[posts[6].name, posts[6].posts]}
            exp={true}
            nolist={false}
            noCatName={true}
            actions
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

export default Blog;
