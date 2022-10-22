import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export default function Menu () {
    const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link to="/movies"><p color="inherit">Movies</p></Link>
      </MenuItem>
      <MenuItem>
        <Link to="/tvShows"><p color="inherit">TV Shows</p></Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Icon
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </Icon>
        <p>Profile</p>
      </MenuItem>
    </Menu>
      );

      return (
        <Menu />
      )
        }