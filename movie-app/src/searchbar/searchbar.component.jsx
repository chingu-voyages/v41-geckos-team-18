import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import './searchbar.style.scss'


const SearchBar = ({ setSearchQuery }) => (
  <div className="seachbar">
  <form>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      variant="outlined"
      placeholder="Search movies, TV, actors, more"
      size="small"
    />
  <IconButton type="submit" aria-label="search">
    <SearchIcon style={{ fill: "blue"}} />
  </IconButton>
  </form>
  </div>
);

export default SearchBar;
