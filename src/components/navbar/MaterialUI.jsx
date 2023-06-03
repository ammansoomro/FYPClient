import { Link } from "react-router-dom";
// import SearchBar from "../Search/Search";
import { AuthContext } from "../../authContext/AuthContext";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Nav, Search, Navlist } from "./Style";


import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';





function Navbar() {
  const { dispatch } = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    // Get access token from local storage
    if (JSON.parse(localStorage.getItem("user")) === null) {
      setLoggedIn(false)
    }
    else {
      setLoggedIn(true)
    }
  }, [location]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, [
    isSticky
  ]);

  return (
    <Nav
      className={isSticky ? 'sticky' : ''}
    >
      <div className="Name">
        <Link to="/">
          <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/en/e/e4/National_University_of_Computer_and_Emerging_Sciences_logo.png" alt="" />
            <h1>FastCentralHub</h1>
          </div>
        </Link>
      </div>
      <Search>
        <Navlist>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Typography sx={{ minWidth: 100 }}>Contact</Typography>
            <Typography sx={{ minWidth: 100 }}>Profile</Typography>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                {/* <PersonAdd fontSize="small" /> */}
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                {/* <Settings fontSize="small" /> */}
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                {/* <Logout fontSize="small" /> */}
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
          {/* <Link to="/courses">
            <li>Courses</li>
          </Link>
          <Link to="/faculty">
            <li>Faculty</li>
          </Link>
          <Link to="/departments">
            <li>Departments</li>
          </Link>
          <Link to="/societies">
            <li>Societies</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
          <Link to="/announcements">
            <li>Announcements</li>
          </Link> */}
          {/* If Logged in Show this else dont */}
          {
            loggedIn
            && (
              <div>
                <button type="submit" onClick={() => {
                  dispatch({ type: "LOGOUT" });
                }}>
                  Log out
                </button>
              </div>
            )
          }
        </Navlist>
        {/* If location is this don't render */}
        {/* {
          location.pathname !== "/" ? null : <SearchBar />
        } */}
      </Search>
    </Nav>
  );
}
export default Navbar;