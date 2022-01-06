import { tokenMovieDb, tokenNews, tokenNewsActually } from "./tokens";

export const urlNewsActually = `https://api.currentsapi.services/v1/search?keywords=entertainment&language=en&category=entertainment&limit=200&apiKey=${tokenNewsActually}`;

export const urlNewsMovie = `https://newsapi.org/v2/everything?q=movie&apiKey=${tokenNews}`;

export const urlNewsSeries = `https://newsapi.org/v2/everything?q=tv-show&apiKey=${tokenNews}`;

export const urlMovieToday = `https://api.themoviedb.org/3/movie/now_playing?api_key=${tokenMovieDb}&language=en-US&page=1`;

export const urlMovieWeek = `https://api.themoviedb.org/3/movie/upcoming?api_key=${tokenMovieDb}&language=en-US&page=1`;

export const urlMovieStreaming = `https://streaming-availability.p.rapidapi.com/search/basic`;

export const urlMovieSearch = (query, year = "") => {
  if (!year)
    return `https://api.themoviedb.org/3/search/movie?api_key=${tokenMovieDb}&query=${query}&language=en-US&page=1&include_adult=false`;
  else
    return `https://api.themoviedb.org/3/search/movie?api_key=${tokenMovieDb}&query=${query}&year=${year}&language=en-US&page=1&include_adult=false`;
};
