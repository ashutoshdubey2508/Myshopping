import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// import { Link } from 'react-router-dom'; 
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
export default function Header() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  let navigate = useNavigate();

  return (
    <nav >
    <Box className="head" sx={{ flexGrow: 1 }}>
    
      <AppBar  position="static" >
        <Toolbar className='header' >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
         
          <LinkContainer to="/" style={{ textDecoration: "none" }}>
           
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , color:"White" }}>
            Home
              </Typography>
         
          </LinkContainer>
        
         
            <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Box>
                <MenuItem onClick={() => {
                  navigate("/Profile");
                }}>Profile</MenuItem>
                </Box>
                <Box>
                <MenuItem onClick={() => {
                  navigate("/myaccount");
                  }}>My account</MenuItem>
                  </Box>
              </Menu>
            </div>
            )}
            
        </Toolbar>
      </AppBar>
      </Box>
      </nav>
  );
}
