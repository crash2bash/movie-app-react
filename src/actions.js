const moviesRequested = () => {
  return {
    type: "FETCH_MOVIES_REQUEST",
  };
};

const moviesLoaded = (newMovies) => {
  return {
    type: "FETCH_MOVIES_SUCCESS",
    payload: newMovies,
  };
};

const pagesCount = (newPages) => {
  return {
    type: "FETCH_PAGES_SUCCESS",
    payload: newPages,
  };
};

const moviesError = (error) => {
  return {
    type: "FETCH_MOVIES_FAILURE",
    payload: error,
  };
};

export const movieChoosed = (movieId) => {
  return {
    type: "MOVIE_CHOOSED",
    payload: movieId,
  };
};

export const pageChoosed = (pageId) => {
  return {
    type: "PAGE_CHOOSED",
    payload: pageId,
  };
};

export const fetchMovies = (movieService, dispatch) => (page) => {
  dispatch(moviesRequested());
  movieService
    .getMovies(page)
    .then((data) => dispatch(moviesLoaded(data)))
    .catch((err) => dispatch(moviesError(err)));
};

export const fetchPages = (movieService, dispatch) => () => {
  movieService.getTotalPages().then((data) => dispatch(pagesCount(data)));
};
