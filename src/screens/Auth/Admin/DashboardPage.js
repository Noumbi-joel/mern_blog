import React, { useEffect } from "react";

import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";

import DashboardIcon from "@mui/icons-material/Dashboard";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import AddIcon from "@mui/icons-material/Add";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GoogleIcon from "@mui/icons-material/Google";

import { useSelector, useDispatch } from "react-redux";

import { getContacts } from "../../../redux/actions/contact";

import { styled, useTheme } from "@mui/material/styles";
import { Avatar, Badge, Container, MenuItem } from "@mui/material";
import { Notifications } from "@mui/icons-material";
import colors from "../../../utils/Colors";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Dashboard = ({ children }) => {
  const dispatch = useDispatch();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const contacts = useSelector((state) => state.contact);

  const approvedContacts = contacts.filter((contact) => contact.approved !== true);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ height: "100px", display: "flex", justifyContent: "center" }}
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={approvedContacts.length??"0"} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <Notifications />
              </Badge>
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Avatar
                alt="Remy Sharp"
                src={"https://www.basketstats.fr/images/faces/12068.png"}
              />
            </IconButton>
          </MenuItem>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h6"
            style={{ fontFamily: "Poppins", fontWeight: "bold" }}
          >
            NKJY (ADMIN)
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List style={{ paddingTop: "100px" }}>
          {[
            { routeName: "Blog Dashboard", routeLink: "/dashboard/" },
            { routeName: "Recent Posts", routeLink: "/dashboard/recents" },
            { routeName: "Add New Post", routeLink: "/dashboard/posts" },
            {
              routeName: "Notifications",
              routeLink: "/dashboard/notifs",
            },
          ].map((route, index) => (
            <Link
              to={`${route.routeLink}`}
              key={index}
              style={{ textDecoration: "none", color: colors.headerColor }}
            >
              <ListItem button>
                <ListItemIcon>
                  {index === 0 && <DashboardIcon />}
                  {index === 1 && <SkipPreviousIcon />}
                  {index === 2 && <AddIcon />}
                  {index === 3 && <Notifications />}
                </ListItemIcon>
                <ListItemText primary={route.routeName} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {[
            { routeName: "All Contacts", routeLink: "/dashboard/contacts" },
            { routeName: "Users", routeLink: "/dashboard/users" },
            { routeName: "My Profile", routeLink: "/dashboard/profile" },
          ].map((route, index) => (
            <Link
              to={`${route.routeLink}`}
              key={index}
              style={{ textDecoration: "none", color: colors.headerColor }}
            >
              <ListItem button>
                <ListItemIcon>
                  {index === 0 && <ConnectWithoutContactIcon />}
                  {index === 1 && <PeopleIcon />}
                  {index === 2 && <PersonIcon />}
                </ListItemIcon>
                <ListItemText primary={route.routeName} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {[
            { routeName: "Gmail", routeLink: "/dashboard/gm" },
            { routeName: "Youtube", routeLink: "/dashboard/yt" },
          ].map((route, index) => (
            <Link
              to={`${route.routeLink}`}
              key={index}
              style={{ textDecoration: "none", color: colors.headerColor }}
            >
              <ListItem button>
                <ListItemIcon>
                  {index === 0 && <GoogleIcon style={{ color: "green" }} />}
                  {index === 1 && <YouTubeIcon style={{ color: "red" }} />}
                </ListItemIcon>
                <ListItemText primary={route.routeName} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Container maxWidth="lg" style={{ marginTop: "50px" }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
