import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import Clonify from "../../assets/Clonify.png";

//header
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import Avatar from "@mui/material/Avatar";
import ImageListItem from "@mui/material/ImageListItem";

//search
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

const drawerWidth = 240;

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 6,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function ResponsiveDrawer({ children }) {
  //header
  const [searchValue, setSearchValue] = useState("");
  const [headerHeight, setHeaderHeight] = useState(0);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  //sidebar
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [menuState, setMenuState] = React.useState({
    dashboard: [true, false, false, false],
    pages: [false, false],
  });

  const sections = [
    {
      title: "DASHBOARD",
      icon: TrackChangesIcon,
      menus: [
        {
          title: "Dashboard",
          items: ["Analytics", "Finance", "Job Board"],
          icon: TrackChangesIcon,
        },
        { title: "Messages", items: ["Starred"], icon: EmailOutlinedIcon },
        { title: "Friends", items: ["Starred"], icon: PeopleAltOutlinedIcon },
        { title: "Apps", items: ["Starred"], icon: AppsOutlinedIcon },
      ],
    },
    {
      title: "PAGES",
      icon: LanguageOutlinedIcon,
      menus: [
        {
          title: "Help Center",
          items: ["Starred"],
          icon: LanguageOutlinedIcon,
        },
        { title: "File Manager", items: ["Starred"], icon: FolderOutlinedIcon },
      ],
    },
  ];

  const handleClick = (sectionIndex, menuIndex) => {
    const sectionKey = Object.keys(menuState)[sectionIndex];
    setMenuState((prevState) => ({
      ...prevState,
      [sectionKey]: prevState[sectionKey].map((isOpen, index) =>
        index === menuIndex ? !isOpen : isOpen
      ),
    }));
  };

  const drawer = (
    <div>
      <img
        src={Clonify}
        alt="Clonify-logo"
        width={150}
        style={{
          paddingTop: "20px",
          paddingLeft: "10px",
          paddingBottom: "20px",
        }}
      />
      {sections.map((section, sectionIndex) => (
        <List
          key={sectionIndex}
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{
                letterSpacing: 2,
                fontSize: "0.8rem",
                fontWeight: "bold",
                opacity: "0.5",
              }}
            >
              {section.title}
            </ListSubheader>
          }
        >
          {section.menus.map((menu, menuIndex) => (
            <div key={menuIndex}>
              <ListItemButton
                onClick={() => handleClick(sectionIndex, menuIndex)}
                sx={{
                  fontWeight: menuState[section.title.toLowerCase()][menuIndex]
                    ? "bold"
                    : "normal",
                }}
              >
                <ListItemIcon>
                  <menu.icon />
                </ListItemIcon>
                <ListItemText
                  primary={menu.title}
                  sx={{
                    fontWeight: menuState[section.title.toLowerCase()][
                      menuIndex
                    ]
                      ? "bold"
                      : "normal",
                  }}
                />
                {menuState[section.title.toLowerCase()][menuIndex] ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )}
              </ListItemButton>
              <Collapse
                in={menuState[section.title.toLowerCase()][menuIndex]}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {menu.items.map((item, itemIndex) => (
                    <ListItemButton
                      key={itemIndex}
                      sx={{
                        pl: 4,
                        fontWeight: menuState[section.title.toLowerCase()][
                          menuIndex
                        ]
                          ? "bold"
                          : "normal",
                      }}
                    >
                      <ListItemText primary={item} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </div>
          ))}
        </List>
      ))}
    </div>
  );

  useEffect(() => {
    const header = document.getElementById("header-appbar");
    if (header) {
      const height = header.offsetHeight;
      setHeaderHeight(height);
      console.log(height);
    }
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        id="header-appbar"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "#ffffff",
          color: "black",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            items: "center",
            gap: "20px",
          }}
        >
          <ImageListItem
            sx={{ display: { xs: "block", sm: "none", width: 90 } }}
          >
            <img
              src={Clonify}
              alt="Clonify-logo"
              sx={{
                paddingTop: "10px",
                paddingLeft: "10px",
                paddingBottom: "20px",
              }}
            />
          </ImageListItem>
          <Paper
            component="form"
            sx={{
              p: "3px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              display: { sm: "block", xs: "none" },
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
            />
          </Paper>
          <IconButton
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <StyledBadge badgeContent={4} color="secondary">
              <NotificationsNoneIcon />
            </StyledBadge>
          </IconButton>
          <IconButton sx={{ display: { xs: "none", sm: "block" } }}>
            <InsertInvitationOutlinedIcon />
          </IconButton>
          <IconButton sx={{ display: { xs: "none", sm: "block" } }}>
            <AppsOutlinedIcon />
          </IconButton>
          <IconButton sx={{}}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

        <SwipeableDrawer
          anchor="left"
          variant="temporary"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          onOpen={() => {}}
        >
          {drawer}
        </SwipeableDrawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)`, xs: "100%" },
          background: "#F2F4F7",

          marginTop: `${headerHeight}px`,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
