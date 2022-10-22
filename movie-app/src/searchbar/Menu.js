import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export default function Menu () {
    const [anchorEl, setAnchorEl] = useState("");

  const isMenuOpen = Boolean(anchorEl);
    const handleMenuClose = () => {
        setAnchorEl(null);
      };
    const menuId = 'primary-search-account-menu';
    

      return (
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              id={menuId}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={isMenuOpen}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            </Menu>
          );
        }