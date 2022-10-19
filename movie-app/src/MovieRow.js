import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './MovieRow.css';

const MovieRow = ({ title, id, data }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    try {
      setMovie(data.results);
    } catch (err) {
      console.log(err.message);
    }
  }, [data.results]);
  return (
    <section className="row">
      <h2>{title}</h2>
      <PosterContainer id={id}>
        {movie &&
          movie.map((movie) => (
            <PosterBox>
              {/* <p>{movie.name}</p> */}
              <PosterImg
                key={movie.id}
                className="poster"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.name}
              />
            </PosterBox>
          ))}
      </PosterContainer>
    </section>
  );
};

const PosterContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  scroll-behavior: smooth;
`;

const PosterBox = styled.div`
  margin-right: 10px;
`;

const PosterImg = styled.img`
  min-width: 200px;
  width: 100%;
  border-radius: 8px;
  height: auto;
`;

export default MovieRow;
