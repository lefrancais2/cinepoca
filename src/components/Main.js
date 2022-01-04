import { helpHttp } from "../helpers/helpHttp";
import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import ListMovies from "./ListMovies";
import ListEstrenosMasEsperados from "./ListEstrenosMasEsperados";
import StreamingCarouselMovie from "./StreamingCarouselMovie";
import StreamingCarouselSeries from "./StreamingCarouselSeries";
import cinta from "../assets/cinta_orange.svg";
import News from "./News";
import Loader from "./Loader";
import "../styles/main.css";
import "../styles/all-page.css";

// db news de prueba hecho en objetos
import {
  dbMovieWeek,
  dbMovieToday,
  dbNewsMovie,
  dbNewsSeries,
  dbNewsActuallyCarousel,
} from "../api/dbNews";
// db news de prueba hecho en objetos

const Main = () => {
  let tokenNews = "22e0325d46b74ecaa518a4ab9e8d661f",
    tokenMovieDb = "da6bf5b57ea46ebcbbb30175966e23a6",
    urlNewsMovie = `https://newsapi.org/v2/everything?q=movie&apiKey=${tokenNews}`,
    urlNewsSeries = `https://newsapi.org/v2/everything?q=tv-show&apiKey=${tokenNews}`,
    urlMovieStreaming = `https://streaming-availability.p.rapidapi.com/search/basic`,
    urlMovieToday = `https://api.themoviedb.org/3/movie/now_playing?api_key=${tokenMovieDb}&language=en-US&page=1`,
    urlMovieWeek = `https://api.themoviedb.org/3/movie/upcoming?api_key=${tokenMovieDb}&language=en-US&page=1`;

  //Inicio Para el carousel principal
  let newsTvShowCarousel =
      "https://newsapi.org/v2/everything?q=tv-show&language=en&apiKey=22e0325d46b74ecaa518a4ab9e8d661f",
    newsHollywood =
      "https://newsapi.org/v2/everything?q=hollywood&language=en&apiKey=22e0325d46b74ecaa518a4ab9e8d661f";
  //Fin Para el carousel principal

  //Noticia actual para el carousel principal, es el mejor
  let urlNewsActually =
    "https://api.currentsapi.services/v1/search?keywords=entertainment&language=en&category=entertainment&limit=200&apiKey=V_lTUr-ovXZ4r0-AY5kp7rJHvEswmCHDwfOwj75gdbsDkF5a";

  const [dataNewsMovie, setDataNewsMovie] = useState(null);
  const [dataNewsSerie, setDataNewsSerie] = useState(null);
  const [dataMovieToday, setDataMovieToday] = useState(null);
  const [dataMovieWeek, setdataMovieWeek] = useState(null);
  const [dataMovieSearch, setDataMovieSearch] = useState(null);
  const [dataNewsActually, setDataNewsActually] = useState(null); //Para el carousel principal
  const [loading, setLoading] = useState(false);

  const valor = false;

  let urlFakeApi = "http://localhost:5000/articles";
  useEffect(() => {
    setLoading(true);
    //helpHttp().get(urlNewsMovie)
    helpHttp()
      .get(urlFakeApi)
      .then((res) => {
        setDataNewsMovie(res);
        setLoading(false);
      });
  }, [urlFakeApi]);

  useEffect(() => {
    setLoading(true);
    //helpHttp().get(urlNewsSeries)
    helpHttp()
      .get(urlFakeApi)
      .then((res) => {
        setDataNewsSerie(res);
        setLoading(false);
      });
  }, [urlFakeApi]);

  /*
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const [dataMToday, dataMWeek] = await Promise.all([
           helpHttp().get(urlMovieToday),
           helpHttp().get(urlMovieWeek)
       ]);
      setDataMovieToday(dataMToday);
      setdataMovieWeek(dataMWeek);
    };
    getData();
    setLoading(false);
  }, [urlMovieToday,urlMovieWeek]);
  */

  /*useEffect(() => {
    setLoading(true);
    const getDataCarousel = async () => {
      const dataCarousel = await Promise.all([
        helpHttp().get(urlNewsActually)
      ])
      setDataNewsActually(dataCarousel);
      setLoading(false);
    }
    getDataCarousel();
  }, [urlNewsActually]);*/

  const handleSearch = async (e) => {
    e.preventDefault();
    if (e.target.search.value) {
      let anio = /[1|2][0-9]{3}/g;
      let urlSearchMovie = "";
      if (anio.test(e.target.search.value)) {
        urlSearchMovie = `http://www.omdbapi.com/?apikey=d2900ed9&s=${e.target.search.value}&y=${e.target.search.value}`;
      } else {
        urlSearchMovie = `http://www.omdbapi.com/?apikey=d2900ed9&s=${e.target.search.value}`;
      }
      const [data] = await Promise.all([helpHttp().get(urlSearchMovie)]);
      setDataMovieSearch(data);

      e.target.search.value = "";
    }
  };

  // console.log(dbNewsActuallyCarousel);
  return (
    <main className="flex-grow-1 bg-white bg-md-light container-page">
      {/* Inicio Titulo Pagina */}
      <section className="title-page d-flex flex-row bg-light align-items-center justify-content-center">
        <aside>
          <h1 className="fw-bold">
            {/* <img src={filmadora} className="d-none d-md-inline-block" width="80" height="80" alt="" /> */}
            <img
              src={cinta}
              className="d-none d-md-inline-block"
              width="80"
              height="80"
              alt=""
            />
            CINEPOCA
          </h1>
        </aside>
      </section>
      {/* Fin Titulo Pagina */}

      {/* Inicio Carousel */}
      <section>
        {/* {loading && <Loader />} */}
        {/* <Carousel data={dataNewsActually} loading={loading} /> */}
        {/* Inicio solo para prueba */}
        <Carousel data={dbNewsActuallyCarousel.news} loading={loading} />
        {/* Fin solo para prueba */}
      </section>
      {/* Fin Carousel */}

      <section className="bg-white title-cine d-flex flex-column align-items-center justify-content-evenly">
        <aside className="align-content-center">
          <h2 className="fw-bold">CINE</h2>
        </aside>
        <aside className="border-top w-100 text-center pt-2 d-flex flex-column align-items-center justify-content-center">
          <a href="/" className="text-decoration-none">
            <span className="text-warning">#</span>
            <span className="text-dark fw-bold text-hover">
              Películas recomendadas
            </span>
          </a>
        </aside>
      </section>

      {/* Inicio Buscar peliculas */}
      <section className="movie-search">
        <aside className="flex-md-grow-1">
          <form onSubmit={handleSearch}>
            <div className="d-flex flex-row flex-wrap align-content-center align-items-center justify-content-between">
              <div className="flex-grow-1">
                <input
                  type="search"
                  name="search"
                  className="w-100 border border-light p-2 text-dark"
                  placeholder="Introduce un titulo ó el año de la película"
                />
              </div>
              <div className="flex-md-grow-0 p-2 bg-white">
                <i className="fas fa-search text-dark"></i>
              </div>
            </div>
          </form>
        </aside>
        <aside className="flex-grow-1 d-flex justify-content-center">
          <a href="/" className="text-decoration-none">
            Inicia sesión para buscar tus peliculas favoritas
          </a>
        </aside>
      </section>
      {/* Fin Buscar peliculas */}

      <section className="group-premiere-cartelera">
        <div className="first-group">
          {/* Inicio Estrenos de esta semana */}
          <section className="mt-4 w-100 d-flex flex-row flex-wrap justify-content-start align-items-center estreno-carousel">
            <ListMovies
              clase=".estreno-carousel"
              title="ESTRENOS DE ESTA SEMANA"
              loading={loading}
              data={dbMovieWeek.results}
              id="0"
            />
          </section>
          {/* Fin Estrenos */}

          {/* Inicio Cartelera */}
          <section className="mt-4 w-100 d-flex flex-row flex-wrap justify-content-start align-items-center cartelera-carousel">
            {/* <ListMovies title="CARTELERA" loading={loading} data={dataMovieToday} /> */}
            {/* Solo para prueba */}
            <ListMovies
              clase=".cartelera-carousel"
              title="CARTELERA"
              loading={loading}
              data={dbMovieToday.results}
              id="1"
            />
            {/* Solo para prueba */}
          </section>
          {/* Fin Cartelera */}
        </div>
        <div className="second-group">
          {/* Inicio Los Estrenos mas esperados */}
          <section className="mt-5 w-100">
            <ListEstrenosMasEsperados />
          </section>
          {/* Fin Los Estrenos mas esperados */}
        </div>
      </section>

      <section className="group-news-cine">
        {/* Inicio Noticias de Peliculas */}
        <section className="mt-5 w-100">
          {/* <News title="CINE" data={dataNewsMovie} loading={loading}/> */}
          {/* Inicio Solo prueba */}
          <News title="CINE" data={dbNewsMovie} loading={valor} />
          {/* Fin Solo prueba */}
        </section>
        {/* Fin Noticias de Peliculas */}
      </section>

      {/* STREAMING */}
      <section className="mt-5 mb-5 w-100">
        <aside className="title-streaming title-streaming-top">
          <h2>STREAMING</h2>
        </aside>
        <div className="d-flex flex-row justify-content-evenly align-items-center border-top border-bottom p-3">
          <div>
            <a href="#s" className="text-decoration-none text-dark fw-bold">
              <span className="text-warning">#</span>
              <span className="streaming-subtitle">Amazon Prime Video</span>
            </a>
          </div>
          <div>
            <a href="#s" className="text-decoration-none text-dark fw-bold">
              <span className="text-warning">#</span>
              <span className="streaming-subtitle">HBO Max</span>
            </a>
          </div>
          <div>
            <a href="#s" className="text-decoration-none text-dark fw-bold">
              <span className="text-warning">#</span>
              <span className="streaming-subtitle">Netflix</span>
            </a>
          </div>
        </div>
        <div className="mt-4">
          <div className="position-relative d-flex flex-row flex-wrap justify-content-start align-items-center streaming-carousel">
            {/* <StreamingCard title="EN HBO MAX"/> */}
            <StreamingCarouselMovie />
          </div>
        </div>
        <div className="mt-4">
          <div className="position-relative d-flex flex-row flex-wrap justify-content-start align-items-center streaming-carousel-series">
            {/* <StreamingCard title="EN HBO MAX"/> */}
            <StreamingCarouselSeries />
          </div>
        </div>
      </section>
      {/* Fin STREAMING */}

      {/* Inicio Noticias de Series */}
      <section className="group-news-cine">
        <section className="mt-5 w-100">
          {/* <News title="SERIES" data={dataNewsSerie} loading={valor}/> */}
          {/* Inicio Solo prueba */}
          <News title="SERIES" data={dbNewsSeries} loading={valor} />
          {/* Fin Solo prueba */}
        </section>
        {/* Fin Noticias de Series */}
      </section>
    </main>
  );
};

export default Main;
