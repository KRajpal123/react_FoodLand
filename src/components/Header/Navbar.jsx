import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

// custom CSS styles
import { styled } from '@mui/material';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: 'none',
  '&:hover': {
    backgroundColor: purple[900],
  },
}));

const pages = ['Home','Products', 'Track', 'Blog','Login','Signup','contact'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
      <Container maxWidth="xl"  sx={{background:'#0f3460',color:'white',}}>
        <Toolbar disableGutters>
          <Typography flexGrow={1}>
            GeoLocation of User
          </Typography>

          {/* mobile screen  */}

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* mobile rendering page  */}

              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} divider={'down'}>
                 <Link to={`/${page}`} style={{textDecoration:'none'}}>
                 <Typography textAlign="center">
                    {page}
                  </Typography>
                 </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

{/* Desktop navbar  */}

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <ColorButton
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2,mx:2, color: 'white', display: 'block' }}
              >
                <Link to={`/${page}`} style={{textDecoration:'none',color:'white'}}>{page}</Link>
              </ColorButton>
            ))}
          </Box>
        </Toolbar>
      </Container>
  );
}
export default ResponsiveAppBar;