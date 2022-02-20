import React, { useEffect, useState } from "react";

import { Button, CircularProgress, Typography } from "@mui/material";
import Dashboard from "./DashboardPage";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from "../../../components/Admin/Header";

//actions
import { getUsers, deleteUser } from "../../../redux/actions/user";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/system";

import { Link } from "react-router-dom";
import colors from "../../../utils/Colors";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const UsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Dashboard>
      <Header headerName="Users Handler" />
      {users.length <= 0 && (
        <Box textAlign="center">
          <CircularProgress />
          <Typography variant="body1" fontFamily="Poppins">
            Wait a moment please...
          </Typography>
        </Box>
      )}
      {users.length > 0 && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell align="right">Logo</StyledTableCell>
                <StyledTableCell align="right">First Name</StyledTableCell>
                <StyledTableCell align="right">Last Name</StyledTableCell>
                <StyledTableCell align="right">Email Address</StyledTableCell>
                <StyledTableCell align="right">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <StyledTableRow key={user._id}>
                  <StyledTableCell component="th" scope="row">
                    {user._id}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="right">
                    {user.imageUrl ? (
                      <img
                        src={user.imageUrl}
                        style={{ borderRadius: "50%" }}
                        width="50px"
                        height="50px"
                        alt=""
                      />
                    ) : (
                      <Typography>Not provided</Typography>
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {user.firstName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {user.lastName}
                  </StyledTableCell>
                  <StyledTableCell align="right">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Link
                      to={`/profile/${user._id}`}
                      style={{ color: colors.purple, textDecoration: "none" }}
                    >
                      <Button
                        variant="outlined"
                        color="info"
                        style={{
                          fontSize: "10px",
                          fontFamily: "Poppins",
                          marginRight: "5px",
                        }}
                      >
                        View
                      </Button>
                    </Link>
                    <Button
                      variant="contained"
                      color="error"
                      style={{ fontSize: "10px", fontFamily: "Poppins" }}
                      onClick={() => dispatch(deleteUser(user._id))}
                    >
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Dashboard>
  );
};

export default UsersPage;
