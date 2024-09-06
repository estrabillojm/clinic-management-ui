import * as React from "react";
import {
  CssBaseline,
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  ListItem,
  ListItemButton,
  Menu,
  Button,
  MenuItem,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { NavbarLinks, NavbarLink } from "../../utils/NavbarLinks";
import { getUserInfo, logout } from "../../../../redux/features/userSlice";
import { useDispatch } from "react-redux";

const drawerWidth = 250;

interface LayoutProps {
  Header: React.ReactElement;
  Content: React.ReactElement;
  pageTitle: string;
  activeLink?: number | undefined;
}

export const Layout: React.FC<LayoutProps> = ({
  Header,
  Content,
  pageTitle,
  activeLink,
}) => {
  const menus: NavbarLink[] = NavbarLinks({ page: pageTitle });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const accessToken = localStorage.getItem("accesstoken");
  const userInfo = getUserInfo(accessToken);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#3AA0AC",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p className="text-blue-900 font-bold text-[24px]">DOC PIE <span className="text-gray-100 font-extralight">|</span> <span className="text-[16px] text-gray-300 font-light">Medical, Pharmacy and Optical Clinic</span></p>
          </div>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ marginLeft: "auto" }}
          >
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <span className="text-yellow-200">
                {userInfo.lastName}, {userInfo.firstName}
              </span>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem> */}
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#246068",
          },
        }}
        className="z-0"
      >
        <Toolbar />
        {activeLink !== undefined && (
          <Box sx={{ overflow: "auto" }}>
            <List>
              {menus.map((text, index) => (
                <NavLink
                  to={text.link}
                  className={`flex items-center`}
                  key={index}
                >
                  <ListItem sx={{ padding: "8px", borderRadius: "0.5em" }}>
                    <ListItemButton
                      sx={{
                        "&:hover": {
                          bgcolor: "#EBCD63",
                          borderRadius: "0.5em",
                          margin: "0 4px",
                          color: "gray",
                        },
                        bgcolor:
                          activeLink === index ? "#EBCD63" : "transparent",
                        color: activeLink === index ? "gray" : "white",
                        borderRadius: activeLink === index ? "0.5em" : "0.5em",
                        margin: activeLink === index ? "0 4px" : "0px",
                      }}
                    >
                      {text.icon}
                      <span className="ms-3">{text.name}</span>
                    </ListItemButton>
                  </ListItem>
                </NavLink>
              ))}
            </List>
          </Box>
        )}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography component={"span"} paragraph>
          {Header}
        </Typography>
        <Typography component={"span"} paragraph>
          {Content}
        </Typography>
      </Box>
    </Box>
  );
};
