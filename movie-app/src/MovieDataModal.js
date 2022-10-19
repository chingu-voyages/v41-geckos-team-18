import React from 'react';
import styled from 'styled-components';

const MovieDataModal = ({
  backdrop_path,
  name,
  title,
  overview,
  release_date,
  first_air_date,
  vote_average,
  setMovieDataOpen,
}) => {
  return (
    <section>
      <div>
        <span>X</span>
        <div src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="modal-img" />
        <div>
          <p>{release_date ? release_date : first_air_date}</p>
          <h2>{title ? title : name}</h2>
          <p>평점 : {vote_average}</p>
          <p>{overview}</p>
        </div>
      </div>
    </section>
  );
};

export default MovieDataModal;
