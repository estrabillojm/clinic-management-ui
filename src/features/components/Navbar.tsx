import * as React from 'react';
import { CssBaseline, Box, Drawer, AppBar, Toolbar, List, Typography, ListItem, ListItemButton, Menu, Button ,MenuItem} from '@mui/material';
import { NavLink } from "react-router-dom";
import { NavbarLinks, NavbarLink } from "./utils/NavbarLinks";

const drawerWidth = 250;
 
interface LayoutProps {
    Header: React.ReactElement,
    Content: React.ReactElement,
    pageTitle: string
    activeLink: number
}


export const Navbar: React.FC<LayoutProps> = ({Header,Content, pageTitle, activeLink}) => {
  const menus: NavbarLink[] = NavbarLinks({page:pageTitle});
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = () => {
    // setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#3AA0AC' }}>  
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', }}>
            <Typography variant="h6" noWrap component="div">
              Clinic Management System
            </Typography>
            <Typography variant="h6" noWrap component="div" sx={{ marginLeft: 'auto' }}>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                test@gmail.com
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Typography>
          </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: '#246068' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
            <List>
                {menus.map((text, index) => (
                <ListItem key={index} sx={{ padding: '8px', borderRadius: '0.5em' }}>
                    <ListItemButton sx={{
                        "&:hover": {
                            bgcolor: '#EBCD63',
                            borderRadius: '0.5em',
                            margin: '0 4px',
                            color: 'gray'
                        },
                        bgcolor: activeLink === index ? '#EBCD63' : 'transparent',
                        color: activeLink === index ? 'gray' : 'white',
                        borderRadius: activeLink === index ? '0.5em' : '0.5em',
                        margin: activeLink === index ? '0 4px' : '0px',
                    }}>
                    <NavLink 
                        to={text.link} 
                        className={`flex items-center`}
                        >
                        {text.icon}
                        <span className="ms-3">{text.name}</span>
                    </NavLink>
                    </ListItemButton>
              </ListItem>
              ))}
            </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
            {Header}
        </Typography>
        <Typography paragraph>
            {Content}
        </Typography>
      </Box>
    </Box>
  );
}