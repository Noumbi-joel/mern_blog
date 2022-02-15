import React, { useEffect } from "react";

import client1 from "../images/testimonials/client.jpg";

import colors from "../utils/Colors";

import bgDots from "../images/illustrations/bg-dots.png";

//components
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Education from "../components/Education";
import Portfolio from "../components/Portfolio";
import Banner from "../components/Banner";
import Testimony from "../components/Testimony";

import { CircularProgress, Grid, Typography } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "../redux/actions/post";
import { Box } from "@mui/system";

const testimonies = [
  {
    msg: "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sitconsectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sitconsectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sitconsectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sitconsectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit",
    clientImg: client1,
    clientName: "Djibril Nakam Benjamin",
    clientRes: "CEO, Agogolines",
  },
];

function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Banner colors={colors} bgImg={"leafYellow"} />

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
            type={[posts[0].name, posts[0].posts]}
            nolist={false}
            exp={false}
          />

          <Categories
            type={[posts[1].name, posts[1].posts]}
            nolist={false}
            exp={true}
          />

          <Education
            educations={[posts[2].name, posts[2].posts]}
            bgDots={bgDots}
            colors={colors}
          />

          <Categories
            type={[posts[3].name, posts[3].posts]}
            nolist={false}
            exp={true}
            sd={true}
          />

          <Portfolio
            noGroupBtn={false}
            type={[posts[4].name, posts[4].posts]}
            color={colors}
          />

          <Testimony testimonies={testimonies} colors={colors} />

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

          <Categories
            type={[posts[6].name, posts[6].posts]}
            exp={true}
            nolist={false}
            actions
            sd={true}
          />
        </>
      )}
    </>
  );
}

export default HomePage;
