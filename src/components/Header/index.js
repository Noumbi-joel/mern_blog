import React from "react";

import {
  Typography,
  AppBar,
  Container,
  Toolbar,
  Box,
  MenuItem,
  Tooltip,
  Avatar,
  Menu,
  Button,
  IconButton,
} from "@mui/material";

//
import { Link } from "react-router-dom";

//material icons
import MenuIcon from "@mui/icons-material/Menu";
import Colors from "../../utils/Colors";
import colors from "../../utils/Colors";

//navbar links
const pages = [
  { routeName: "Home", routeLink: "/" },
  { routeName: "About", routeLink: "/about" },
  { routeName: "Blog", routeLink: "/blog" },
  { routeName: "PortFolio", routeLink: "/portfolio" },
  { routeName: "Contact", routeLink: "/contact" },
];
const settings = [
  { routeName: "Login", routeLink: "/auth" },
  { routeName: "Profile", routeLink: "/profile" },
  { routeName: "Dashboard", routeLink: "/dashboard" },
  { routeName: "Logout", routeLink: "/" },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      position="fixed"
      style={{
        boxShadow: "none",
        backgroundColor: Colors.purple,
        height: "100px",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            to="/"
            style={{ color: colors.white, textDecoration: "none" }}
            onClick={() => console.log("/")}
          >
            <Typography
              fontFamily="Poppins"
              variant="h6"
              noWrap
              component="div"
              style={{ fontSize: "30px", fontWeight: "bold" }}
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              NKJY
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              fontFamily="Poppins"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <Link
                  key={index}
                  to={`${page.routeLink}`}
                  style={{ color: colors.purple, textDecoration: "none" }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography fontFamily="Poppins" textAlign="center">
                      {page.routeName}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            fontFamily="Poppins"
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Link
              to="/"
              style={{ color: colors.white, textDecoration: "none" }}
              onClick={() => console.log("/")}
            >
              NKJY
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Link
                to={`${page.routeLink}`}
                style={{
                  color: colors.white,
                  textDecoration: "none",
                  fontFamily: "Poppins",
                }}
                key={index}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.routeName}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <Link
                  key={index}
                  to={`${setting.routeLink}`}
                  style={{
                    color: colors.purple,
                    textDecoration: "none",
                    fontFamily: "Poppins",
                  }}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography fontFamily="Poppins" textAlign="center">
                      {setting.routeName}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
