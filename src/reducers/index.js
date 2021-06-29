const currentId = window.location.pathname.split("/");

const checkCurrentPage = () => {
  const currentPage = window.location.pathname.split("/");
  if (currentPage.includes("home")) {
    return currentPage[currentPage.length - 1];
  } else {
    return 1;
  }
};

const initialState = {
  id: currentId[currentId.length - 1],
  movies: [],
  loading: true,
  error: null,
  pages: 1,
  page: checkCurrentPage(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES_REQUEST":
      return {
        ...state,
        movies: [],
        loading: true,
      };

    case "FETCH_MOVIES_SUCCESS":
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };

    case "FETCH_PAGES_SUCCESS":
      const totalPages = action.payload;

      return {
        ...state,
        pages: totalPages,
      };

    case "FETCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "MOVIE_CHOOSED":
      const movieId = action.payload;

      return {
        ...state,
        id: movieId,
      };

    case "PAGE_CHOOSED":
      const pageId = action.payload;

      return {
        ...state,
        page: pageId,
      };

    default:
      return state;
  }
};

export default reducer;
