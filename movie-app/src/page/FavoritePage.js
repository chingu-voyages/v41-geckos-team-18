import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';

const FavoritePage = () => {
  const [movieData, setMovieData] = useState([]);
  const getData = () => {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      setMovieData(...movieData, localStorage.getItem(`${key}`));
      console.log(key);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <Container></Container>;
};

export default FavoritePage;
