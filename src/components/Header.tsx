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

const Header = ({ setView }: { setView: (view: string) => void }) => {
  const theme = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuToggle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemSelection = (view: string): void => {
    handleMenuToggle();
    setView(view);
  };

  const generateMenuItems = () => {
    const menuItems = [
      { label: 'Poké Home', view: 'POKE_HOME' },
      { label: 'Poké Search', view: 'POKE_SEARCH' },
    ];
    return menuItems.map((item, index) => (
      <MenuItem
        key={index}
        onClick={() => handleMenuItemSelection(item.view)}
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          '&:hover': {
            color: 'gray',
            backgroundColor: theme.palette.primary.main
          },
          marginBottom: index !== menuItems.length - 1 ? '8px' : '0px'
        }}
      >
        {item.label}
      </MenuItem>
    ));
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => setView('POKE_HOME')}>
            PokéProjects
          </Typography>
        </Toolbar>
      </AppBar>
      <Menu
        open={isMenuOpen}
        onClose={handleMenuToggle}
        anchorEl={document.getElementById('menu-button')}
      >
        {generateMenuItems()}
      </Menu>
    </Box>
  )
}

export default Header;