import { Typography } from "@mui/material";
import React from "react";

const Header = ({ headerName }) => {
  return (
    <div>
      <Typography fontFamily="Poppins">Overview</Typography>
      <Typography fontFamily="Poppins" fontWeight="bold" fontSize="20px">
        {headerName}
      </Typography>
    </div>
  );
};

export default Header;
