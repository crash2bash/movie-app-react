import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { MovieServiceProvider } from "./components/movie-service-context/movie-service-context";
import MovieService from "./services/movie-service";
import App from "./components/app/app";
import store from "./store";
import "./index.scss";

const movieService = new MovieService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MovieServiceProvider value={movieService}>
        <Router>
          <App />
        </Router>
      </MovieServiceProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
