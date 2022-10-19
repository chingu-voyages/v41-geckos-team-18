import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieDataModal from './MovieDataModal';

const MovieRow = ({ title, id, data }) => {
  const [movie, setMovie] = useState([]);
  const [movieDataOpen, setMovieDataOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  const PosterClick = (movie) => {
    setMovieDataOpen(true);
    setSelectedMovie(movie);
    console.log('setSelectedMovie', movie);
  };

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
            <PosterBox key={movie.id}>
              {/* <p>{movie.name}</p> */}
              <PosterImg
                className="poster"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.name}
                onClick={() => {
                  PosterClick(movie);
                }}
              />
            </PosterBox>
          ))}
      </PosterContainer>
      {movieDataOpen && <MovieDataModal {...selectedMovie} setMovieDataOpen={setMovieDataOpen} />}
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
  cursor: pointer;
`;

export default MovieRow;
