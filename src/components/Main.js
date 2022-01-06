import { helpHttp } from "../helpers/helpHttp";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ListEstrenosMasEsperados from "./ListEstrenosMasEsperados";
import StreamingCarouselMovie from "./StreamingCarouselMovie";
import StreamingCarouselSeries from "./StreamingCarouselSeries";
import ApiContext from "../context/ApiContext";
import ListMovies from "./ListMovies";
import CineTitle from "./CineTitle";
import Carousel from "./Carousel";
import News from "./News";
import Loader from "./Loader";

import "../styles/main.css";
import "../styles/all-page.css";
import { urlMovieSearch } from "../api/service";
import { convertToSlug } from "../functions/functionsGeneral";

const Main = ({ dataMovieSearch, setDataMovieSearch }) => {
  // Borrar luego del funcionamiento de la api
  const {
    dbMovieWeek,
    dbMovieToday,
    dbNewsMovie,
    dbNewsSeries,
    dbNewsActuallyCarousel,
    loading,
  } = useContext(ApiContext);
  // Fin de Borrado luego del funcionamiento de la api

  // const {
  //   dataNewsMovie,
  //   dataNewsSerie,
  //   dataMovieToday,
  //   dataMovieWeek,
  //   dataNewsActually,
  //   loading,
  // } = useContext(ApiContext);

  const valor = false;
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (e.target.search.value) {
      let anio = /[1|2][0-9]{3}/g;
      let urlSearchMovie = "";
      if (anio.test(e.target.search.value)) {
        //urlSearchMovie = `http://www.omdbapi.com/?apikey=d2900ed9&s=${e.target.search.value}&y=${e.target.search.value}`;
        urlSearchMovie = urlMovieSearch(
          e.target.search.value,
          e.target.search.value
        );
      } else {
        //urlSearchMovie = `http://www.omdbapi.com/?apikey=d2900ed9&s=${e.target.search.value}`;
        urlSearchMovie = urlMovieSearch(e.target.search.value);
      }
      const [data] = await Promise.all([helpHttp().get(urlSearchMovie)]);
      setDataMovieSearch(data);
      let params = convertToSlug(e.target.search.value);
      e.target.search.value = "";

      navigate(`/busqueda/${params}`, { dataMovieSearch });
    }
  };

  return (
    <main className="flex-grow-1 bg-white bg-md-light container-page">
      {/* Inicio Titulo Pagina */}
      <CineTitle />
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
          <Link to="/peliculas-recomendadas" className="text-decoration-none">
            <span className="text-warning">#</span>
            <span className="text-dark fw-bold text-hover">
              Películas recomendadas
            </span>
          </Link>
          {/* <a href="/" className="text-decoration-none">
            <span className="text-warning">#</span>
            <span className="text-dark fw-bold text-hover">
              Películas recomendadas
            </span>
          </a> */}
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
