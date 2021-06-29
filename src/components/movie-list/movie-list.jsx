import React, { useEffect } from 'react';
import MovieItem from '../movie-item/movie-item';
import { connect } from 'react-redux';

import { fetchMovies, movieChoosed, fetchPages, pageChoosed } from '../../actions';
import withMovieService from '../hoc/with-movie-service';
import Spinner from '../spinner/spinner';
import Error from '../error/error';
import Pagination from '../pagination/pagination';
import '../../index.scss';
import './movie-list.scss';

const MovieList = ({ movies, onChooseMovie }) => {
  return (
    <ul className="movies__list">
      {movies.map(movie => {
        return (
          <li className="movies__item card" key={movie.id}>
            <MovieItem 
              movie={movie}
              onChooseMovie={() => onChooseMovie(movie.id)}
            />
          </li>
        )
      })}
  </ul>
  )
}

const MovieListContainer = (props) => {
  const { movies, loading, error, fetchMovies, onChooseMovie, fetchPages, pages, onChangePage, page } = props;

  useEffect(() => {
    fetchMovies(page)
    fetchPages()
  }, [fetchMovies, fetchPages, page]);

  if (loading) {
    return <Spinner />
  };

  if (error) {
    return <Error />
  };

  return (
    <>
      <div className="movies section">
        <MovieList movies={movies} onChooseMovie={onChooseMovie} />
      </div>
      <Pagination pages={pages} changePage={onChangePage} />
    </>
  )
}

const mapStateToProps = ({ movies, loading, error, pages, page }) => {
  return { movies, loading, error, pages, page };
};

const mapDispatchToProps = (dispatch, { movieService }) => {
  return {
    fetchMovies: fetchMovies(movieService, dispatch),
    fetchPages: fetchPages(movieService, dispatch),
    onChooseMovie: (id) => dispatch(movieChoosed(id)),
    onChangePage: (page) => dispatch(pageChoosed(page)),
  }
};

export default withMovieService()(
  connect(mapStateToProps, mapDispatchToProps)(MovieListContainer)
);
