import axios from "axios";

const URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=e8ae59d95e445da13e5a518624ac0972&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false";

export default class MovieService {
  async getMovies(page) {
    const res = await axios.get(`${URL}&page=${page}`);
    return res.data.results;
  }

  async getTotalPages(page) {
    const res = await axios.get(`${URL}&page=${page}`);
    return res.data.total_pages;
  }
}
