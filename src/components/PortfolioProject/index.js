import React, { useState } from "react";
import { Button, Grid } from "@mui/material";

const PortfolioProject = ({project, index}) => {
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
      sm={4}
      key={index}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={project.image}
          alt=""
          style={{ height: "500px" }}
          onMouseLeave={handleMouseLeave}
          onMouseOver={handleMouseOver}
        />
        <Button
          variant="contained"
          color="success"
          style={{
            position: "absolute",
            left: "20%",
            top: "50%",
            display: isOver ? "inline" : "none",
          }}
        >
          View Projects
        </Button>
      </div>
    </Grid>
  );
};

export default PortfolioProject;
