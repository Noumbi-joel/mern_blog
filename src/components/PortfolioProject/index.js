import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import colors from "../../utils/Colors";

const PortfolioProject = ({ project, index }) => {
  const [isOver, setIsOver] = useState(false);

  const handleMouseOver = () => {
    setIsOver(true);
  };

  const handleMouseLeave = () => {
    setIsOver(false);
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      key={index}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={project.imageUrl}
          alt=""
          style={{ height: "500px" }}
        />
        <Button
          variant="contained"
          color="success"
          style={{
            position: "absolute",
            left: "20%",
            top: "50%",
          }}
          disabled={project.githubLink === "/" && true}
        >
          <a
            style={{ color: colors.white, fontFamily: "Poppins" }}
            href={`${project.githubLink}`}
            rel="noreferrer"
            target="_blank"
          >
            {project.githubLink === "/" ? "Business" : "View project"}
          </a>
        </Button>
      </div>
    </Grid>
  );
};

export default PortfolioProject;
