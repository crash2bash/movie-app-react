import React from "react";
import Date from '../date/date';
import { Link } from "react-router-dom";

const imgURL = 'https://image.tmdb.org/t/p/original'

const MovieItem = ({ movie, onChooseMovie }) => {
  const { id, original_title, poster_path, release_date } = movie;

  return (
    <Link
      className="movies__link card__link"
      to={`/movie/${id}`}
      onClick={() => onChooseMovie(id)}
    >
      <div className="movies__img card__img">
        <img
          src={`${imgURL}${poster_path}`}
          alt={original_title}
          draggable="false"
          loading="lazy" 
        />
      </div>
      <div className="movies__overlay card__overlay">
        <span 
          title={original_title} 
          className="movies__title card__title"
          >
            {original_title}
        </span>
        <div className="movies__release-date card__date">
          <Date release={release_date} />
        </div>
      </div>
    </Link>
  )
}

export default MovieItem;
