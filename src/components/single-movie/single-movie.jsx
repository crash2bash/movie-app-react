import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';

import Date from '../date/date';
import 'swiper/swiper.scss';
import './single-movie.scss';
import '../../index.scss';

const SingleMovie = ({ movieId }) => {
  const imgURL = 'https://image.tmdb.org/t/p/original'
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=e8ae59d95e445da13e5a518624ac0972&language=en-US`;
  const similarURL = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=e8ae59d95e445da13e5a518624ac0972`

  const [movieInfo, setMovieInfo] = useState({})
  const [similarMovies, setSimilarMovies] = useState([])

  const { backdrop_path, release_date, vote_average, title, overview } = movieInfo;

  useEffect(() => {
    axios.get(URL).then((res) => {
      setMovieInfo(res.data);
    });

    axios.get(similarURL).then((res) => {
      console.log(res.data.results);
      setSimilarMovies(res.data.results);
    });
  }, [URL, similarURL])

  return (
    <div className="single-movie">
      <div className="single-movie__img">
        <img src={`${imgURL}${backdrop_path}`} alt={title} draggable="false" />
      </div>
      <div className="single-movie__rating">
        <p>{`${vote_average * 10}%`}</p>
      </div>
      <div className="single-movie__content">
        <div className="single-movie__date">
          <Date className="movies__release-date card__date" release={release_date} />
        </div>
        <div className="single-movie__title">
          <h2>{title}</h2>
        </div>
        <div className="single-movie__overview-title">
          <h3>OVERVIEW:</h3>
        </div>
        <div className="single-movie__overview-text">
          <p>{overview}</p>
        </div>
        <div className="single-movie__similar">
          <div className="single-movie__similar-title">
            <h3>Similar movies:</h3>
          </div>
          <Swiper className="single-movie__similar-list" slidesPerView={'auto'}>
            {similarMovies.map(similarMovie => {
              const { original_title, backdrop_path } = similarMovie
              return (
                <SwiperSlide key={original_title} className="single-movie__similar-slider">
                  <div className="single-movie__similar-slide">
                    <img src={`${imgURL}${backdrop_path}`} alt={original_title} />
                  </div>
                  <div className="single-movie__similar-slide-title">
                    <p>{original_title}</p>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default SingleMovie;
