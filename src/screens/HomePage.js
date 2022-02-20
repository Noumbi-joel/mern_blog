import React, { useEffect, useMemo } from "react";

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

  const computeCategories = (allPost) => {
    const categories = [
      { name: "Skills", posts: [] },
      { name: "Experiences", posts: [] },
      { name: "Education", posts: [] },
      { name: "Services", posts: [] },
      { name: "Portfolio", posts: [] },
      { name: "Clients", posts: [] },
      { name: "Blogs", posts: [] },
      { name: "Work Process", posts: [] },
    ];

    allPost.forEach((post) => {
      switch (post.categoryName) {
        case "Skills":
          if (!categories[0].posts.includes(post)) {
            return categories[0].posts.push(post);
          }
          break;

        case "Experiences":
          if (!categories[1].posts.includes(post)) {
            return categories[1].posts.push(post);
          }
          break;

        case "Education":
          if (!categories[2].posts.includes(post)) {
            return categories[2].posts.push(post);
          }
          break;

        case "Services":
          if (!categories[3].posts.includes(post)) {
            return categories[3].posts.push(post);
          }
          break;

        case "Portfolio":
          if (!categories[4].posts.includes(post)) {
            return categories[4].posts.push(post);
          }
          break;

        case "Clients":
          if (!categories[5].posts.includes(post)) {
            return categories[5].posts.push(post);
          }
          break;

        case "Blogs":
          if (!categories[6].posts.includes(post)) {
            return categories[6].posts.push(post);
          }
          break;

        case "Work Process":
          if (!categories[7].posts.includes(post)) {
            return categories[7].posts.push(post);
          }
          break;
        default:
          break;
      }
    });
    console.log(categories);
    return categories;
  };

  const getCategories = useMemo(() => {
    return computeCategories(posts);
  }, [posts]);

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

      {getCategories && (
        <>
          <Categories
            type={[getCategories[0].name, getCategories[0].posts]}
            nolist={false}
            exp={false}
          />

          <Categories
            type={[getCategories[1].name, getCategories[1].posts]}
            nolist={false}
            exp={true}
          />

          <Education
            educations={[getCategories[2].name, getCategories[2].posts]}
            bgDots={bgDots}
            colors={colors}
          />

          <Categories
            type={[getCategories[3].name, getCategories[3].posts]}
            nolist={false}
            exp={true}
            sd={true}
          />

          <Portfolio
            noGroupBtn={false}
            type={[getCategories[4].name, getCategories[4].posts]}
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
            <Slider clientsList={[getCategories[5].posts]} />
          </Grid>

          <Categories
            type={[getCategories[6].name, getCategories[6].posts]}
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
