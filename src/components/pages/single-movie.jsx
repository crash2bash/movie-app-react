import React from "react";
import SingleMovie from "../single-movie/single-movie";

const MoviePage = ({ movieId }) => {
  return <SingleMovie movieId={movieId.id} />;
};

export default MoviePage;
