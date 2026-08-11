import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: theme.palette.primary.main }}>
          <IconButton
            id="menu-button"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PokéProjects
          </Typography>
        </Toolbar>
      </AppBar>
      <Menu
        open={isMenuOpen}
        onClose={handleMenuToggle}
      >
        <MenuItem
          onClick={handleMenuToggle}
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            '&:hover': {
              color: 'gray',
              backgroundColor: theme.palette.primary.main}
          }}>Poké Search</MenuItem>
      </Menu>
    </Box>
  )
}

export default Header;