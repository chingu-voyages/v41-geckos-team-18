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
    <ModalContainer>
      <ModalBox>
        <button onClick={() => setMovieDataOpen(false)}>X</button>
        <ModalImg src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="modal-img" />
        <div>
          <p>{release_date ? release_date : first_air_date}</p>
          <h2>{title ? title : name}</h2>
          <p>vote_average : {vote_average}</p>
          <p>{overview}</p>
        </div>
      </ModalBox>
    </ModalContainer>
  );
};

const ModalContainer = styled.section`
  z-index: 1200;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
`;

const ModalBox = styled.div`
  position: relative;
  padding: 15px;
  max-width: 800px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14),
    0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  border-radius: 8px;
  transition: all 400ms ease-in-out 2s;
  animation: fadeIn 400ms;
`;
// const CloseBtn = style.span``;
const ModalImg = styled.img`
  width: 100%;
  height: auto;
`;
// const ModalContent = style.div``;
// const MovieDate = style.div``;
// const MovieTitle = style.h2``;
// const MovieVote = style.p``;
// const MovieOverview = style.p``

export default MovieDataModal;
