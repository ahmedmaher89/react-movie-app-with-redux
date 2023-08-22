import { AllMovies, MovieApi } from "../types/moviesType";
import axios from "axios";

export const getAllMovie = () => {
  return async (dispatch) => {
    const res = await axios.get(MovieApi);
    dispatch({
      type: AllMovies,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getMovieSearch = (word) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=feeb77ecac0e71e336d19271a60006f3&query=${word}&include_adult=false&language=ar&page=1`
    );
    dispatch({
      type: AllMovies,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getPage = (page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=feeb77ecac0e71e336d19271a60006f3&language=ar&page=${page}`
    );

    dispatch({
      type: AllMovies,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
