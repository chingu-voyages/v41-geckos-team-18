import React from 'react';
import { useEffect, useState } from 'react';

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
      <div id={id} className="row-poster">
        {movie &&
          movie.map((movie) => (
            <div>
              {/* <p>{movie.name}</p> */}
              <img
                key={movie.id}
                className="poster"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.name}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default MovieRow;
