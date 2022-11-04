import { useRef } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';

const SearchBar = () => {
  const inputRef = useRef();
  const searchContent = () => {
    console.log(`${inputRef.current.value}`);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchContent();
    }
  };
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
        <Typography
          variant="h5"
          component="h1"
          sx={{ cursor: 'pointer' }}
          onClick={() => window.location.reload()}
        >
          NANUM
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <SearchBox
            sx={{
              marginRight: '8px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <input
              style={{
                width: '100%',
                height: '100%',
                padding: '0 10px',
                background: 'none',
                borderRadius: '5px',
                outline: 'none',
                border: 'none',
                color: 'white',
              }}
              placeholder="Search for movies, genre, actors..."
              ref={inputRef}
              onKeyPress={handleKeyPress}
            />
            <SearchIcon sx={{ margin: '0 10px' }} onClick={searchContent} />
          </SearchBox>

          <DesktopButtonStyle>
            <FavoriteIcon sx={{ mr: 1 }} />
            FAVORITE
          </DesktopButtonStyle>
          <MobileButtonStyle>
            <FavoriteIcon color="primary" sx={{ fontSize: '30px', marginTop: '5px' }} />
          </MobileButtonStyle>
        </Box>
      </Box>
    </div>
  );
};

const SearchBox = styled('div')(({ theme }) => ({
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
    width: '315px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '480px',
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
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

export default SearchBar;
