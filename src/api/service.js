import {
  tokenMovieDb,
  tokenNews,
  tokenNewsActually,
  tokenIMDb,
} from "./tokens";

export const urlNewsActually = `https://api.currentsapi.services/v1/search?keywords=entertainment&language=en&category=entertainment&limit=15&apiKey=${tokenNewsActually}`;

//export const urlNewsMovie = `https://newsapi.org/v2/everything?q=movie&apiKey=${tokenNews}`;
export const urlNewsMovie = `https://newsapi.org/v2/everything?q=movie&apiKey=22e0325d46b74ecaa518a4ab9e8d661f`;

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

// url imdb 250 most popular
export const urlIMDB250Popular = `https://imdb-api.com/en/API/Top250Movies/${tokenIMDb}`;

export const urlIMDB250MostPopular = `https://imdb-api.com/en/API/MostPopularMovies/${tokenIMDb}`;

export const urlIMDBCommingSoon = `https://imdb-api.com/en/API/ComingSoon/${tokenIMDb}`;

export const urlIMDBtarilers = `https://imdb-api.com/API/YouTubePlaylist?apiKey=${tokenIMDb}&list=$listYoutube`;

export const urlCriticMostPopular = (idIMDB) => {
  return `https://imdb-api.com/en/API/MetacriticReviews/${tokenIMDb}/${idIMDB}`;
};

export const urlIMDBBestSeries = `https://imdb-api.com/en/API/MostPopularTVs/${tokenIMDb}`;

export const urlIMDBAllSeries = `https://imdb-api.com/API/AdvancedSearch/${tokenIMDb}?title_type=tv_movie,tv_series,tv_special,tv_miniseries,tv_short&count=250`;
