import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  Alert,
} from "@mui/material";
import Dashboard from "./DashboardPage";

import FileBase from "react-file-base64";

import Input from "../../../components/Input";

import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../../redux/actions/post";
const PostsPage = () => {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const [isBlog, setIsBlog] = useState(false);

  const [postData, setPostData] = useState({
    title: "",
    paragraph: "",
    imageUrl: "",
    categoryName: "",
    githubLink: "",
    debutDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const clear = () => {
    setPostData({
      title: "",
      paragraph: "",
      imageUrl: "",
      categoryName: "",
      githubLink: "",
      debutDate: "",
      endDate: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isBlog) {
      console.log(postData);
      dispatch(createPost(postData));
    } else {
      console.log(postData);
      dispatch(createPost(postData));
    }
    setSuccess(true);
    clear();
  };

  return (
    <Dashboard>
      <Typography variant="body2" fontFamily="Poppins" gutterBottom>
        Overview
      </Typography>
      <Typography variant="h6" fontFamily="Poppins" gutterBottom>
        ADD NEW POST
      </Typography>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <Paper elevation={3} style={{ padding: "10px" }}>
            {success && (
              <Alert severity="success">Your post has been sent 😃!</Alert>
            )}
            {!isBlog ? (
              <>
                <Input
                  value={postData.title}
                  name="title"
                  label="Your post title"
                  handleChange={handleChange}
                  style={{ marginBottom: "10px", marginRight: "5px" }}
                  type="text"
                  fullWidth
                  required
                />
                <Input
                  value={postData.githubLink}
                  name="githubLink"
                  label="Your Github Link"
                  handleChange={handleChange}
                  style={{ marginBottom: "10px", marginRight: "5px" }}
                  type="text"
                  fullWidth
                  required
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Input
                    value={postData.categoryName}
                    style={{ marginBottom: "10px" }}
                    name="categoryName"
                    label="Your post category"
                    handleChange={handleChange}
                    type="text"
                    fullWidth
                    required
                  />
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setPostData({ ...postData, imageUrl: base64 })
                    }
                  />
                  <Button type="submit" variant="outlined">
                    Submit
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Input
                  value={postData.title}
                  name="title"
                  label="Your post title"
                  handleChange={handleChange}
                  style={{ marginBottom: "10px", marginRight: "5px" }}
                  type="text"
                  fullWidth
                  required
                />
                <Input
                  value={postData.debutDate}
                  name="debutDate"
                  handleChange={handleChange}
                  style={{ marginBottom: "10px" }}
                  type="date"
                  fullWidth
                />
                <Input
                  value={postData.endDate}
                  name="endDate"
                  handleChange={handleChange}
                  style={{ marginBottom: "10px" }}
                  type="date"
                  fullWidth
                />
                <Input
                  multiline
                  style={{ width: "100%", marginBottom: "10px" }}
                  rows={5}
                  value={postData.paragraph}
                  name="paragraph"
                  label="Your post message"
                  handleChange={handleChange}
                  type="text"
                />
                <Grid
                  container
                  spacing={2}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Grid item xs={12} sm={4}>
                    <Input
                      value={postData.categoryName}
                      style={{ marginBottom: "10px" }}
                      name="categoryName"
                      label="Your post category"
                      handleChange={handleChange}
                      type="text"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} align="center">
                    <FileBase
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) =>
                        setPostData({ ...postData, imageUrl: base64 })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} align="right">
                    <Button type="submit" variant="contained">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </>
            )}
            <Button onClick={() => setIsBlog(!isBlog)}>
              Toggle to {isBlog ? "Blog" : "Project"} Form
            </Button>
          </Paper>
        </form>
      </Container>
    </Dashboard>
  );
};

export default PostsPage;
