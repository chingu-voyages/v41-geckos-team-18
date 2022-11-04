import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
// import { Link } from 'react-router-dom';
// import Container from '@mui/material/Container';

const SearchBar = () => {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#4f4f4f',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: '8px',
    width: '144px',
    [theme.breakpoints.up('sm')]: {
      marginRight: '16px',
      width: '317px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '480px',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    background: '',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {},
    },
  }));

  //Button style
  const DesktopButtonStyle = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    padding: '6px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.5),
    },
  }));

  const MobileButtonStyle = styled('div')(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
    '&:hover': {
      color: alpha(theme.palette.primary.main, 0.5),
    },
  }));

  return (
    <div style={{ backgroundColor: '#45464F' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '64px',
          backgroundColor: 'theme.pallette.background.default',
          padding: '1rem 2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <Typography>App Title</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Search sx={{ marginRight: '8px' }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>
          <DesktopButtonStyle>
            <FavoriteIcon sx={{ mr: 1 }} />
            FAVORITE
          </DesktopButtonStyle>
          <MobileButtonStyle>
            <FavoriteIcon color="primary" sx={{ fontSize: '30px' }} />
          </MobileButtonStyle>
        </Box>
      </Box>
    </div>
  );
};

export default SearchBar;
