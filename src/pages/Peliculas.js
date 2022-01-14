import { useContext, useEffect, useState } from "react";
import ListEstrenosMasEsperados from "../components/ListEstrenosMasEsperados";
import ApiContext from "../context/ApiContext";
import ListMovies from "../components/ListMovies";
import CineTitle from "../components/CineTitle";
import Carousel from "../components/Carousel";
import News from "../components/News";
import Loader from "../components/Loader";

import "../styles/main.css";
import "../styles/all-page.css";
import "../styles/peliculas.css";
import WhereActually from "../components/WhereActually";
import TrailersVideoCard from "../components/TrailersVideoCard";
import { dbIMDBCommingSoon, dbIMDB250MostPopular } from "../api/dbNews";
import CriticsGeneral from "../components/CriticsGeneral";
import { helpHttp } from "../helpers/helpHttp";
import { urlIMDB250MostPopular } from "../api/service";

const Peliculas = () => {
  // Borrar luego del funcionamiento de la api
  // const {
  //   dbMovieToday,
  //   dbNewsMovie,
  //   dbNewsActuallyCarousel,
  //   dbIMDBTrailersYoutube,
  //   loading,
  // } = useContext(ApiContext);
  // Fin de Borrado luego del funcionamiento de la api
  const [dataMostpopular, setDataMostpopular] = useState(null);
  const [loadMostPopular, setLoadMostPopular] = useState(false);

  useEffect(() => {
    setLoadMostPopular(true);
    const getDataIMDB = async () => {
      const [data] = await helpHttp(10000).get(urlIMDB250MostPopular);
      setDataMostpopular(data);
    };
    getDataIMDB();
    setLoadMostPopular(false);
  }, []);

  const {
    dataNewsMovie,
    dataMovieToday,
    dataMovieWeek,
    dataNewsActually,
    dbIMDBTrailersYoutube,
    loading,
    loadForDataCarousel,
    loadForMovieToday,
    loadForNewsMovie,
  } = useContext(ApiContext);

  let manyVideos = 5;
  if (window.screen.width > 600) {
    manyVideos = 8;
  }
  window.addEventListener("resize", (e) => {
    if (e.currentTarget.screen.width > 600) {
      manyVideos = 8;
    }
  });

  return (
    <main className="flex-grow-1 bg-white bg-md-light container-page">
      {/* Inicio Titulo Pagina */}
      <CineTitle display="" alto="50" ancho="30" />
      {/* Fin Titulo Pagina */}

      {/* Ubicacion ruta absoluta */}
      <section>
        <WhereActually site="Peliculas" />
      </section>
      {/* Ubicacion ruta absoluta */}

      <section className="my-4">
        <aside className="d-flex flex-row justify-content-center align-content-center">
          <h2 className="fw-bold">CINE</h2>
        </aside>
      </section>

      {/* Inicio Carousel */}
      <section>
        {loadForDataCarousel && <Loader />}
        {dataNewsActually && (
          <Carousel data={dataNewsActually} loading={loadForDataCarousel} />
        )}
        {/* Inicio solo para prueba */}
        {/* <Carousel data={dbNewsActuallyCarousel.news} loading={loadForDataCarousel} /> */}
        {/* Fin solo para prueba */}
      </section>
      {/* Fin Carousel */}

      <section className="my-4">
        <div className="Traile-destacado-title">
          <h3>TRAILERS DESTACADOS</h3>
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-evenly">
          {dbIMDBTrailersYoutube &&
            dbIMDBTrailersYoutube.videos.map(
              (el, index) =>
                index < manyVideos && <TrailersVideoCard key={index} el={el} />
            )}
        </div>
      </section>

      <section className="group-premiere-cartelera">
        <div className="first-group">
          {/* Inicio Estrenos de esta semana */}
          <section className="mt-4 w-100 d-flex flex-row flex-wrap justify-content-start align-items-center estreno-carousel">
            <ListMovies
              clase=".estreno-carousel"
              title="ESTRENOS DE ESTE MES"
              loading={loading}
              data={dbIMDBCommingSoon.items}
              id="0"
              limit={10}
            />
          </section>
          {/* Fin Estrenos */}

          {/* Inicio Cartelera */}
          <section className="mt-4 w-100 d-flex flex-row flex-wrap justify-content-start align-items-center cartelera-carousel">
            {loadForMovieToday && <Loader />}
            {dataMovieToday && (
              <ListMovies
                clase=".cartelera-carousel"
                id="1"
                limit={10}
                title="CARTELERA"
                loading={loadForMovieToday}
                data={dataMovieToday.results}
              />
            )}
            {/* Solo para prueba */}
            {/* <ListMovies
              clase=".cartelera-carousel"
              title="CARTELERA"
              loading={loading}
              data={dbMovieToday.results}
              id="1"
              limit={10}
            /> */}
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

      <section className="mt-5">
        {loadMostPopular && <Loader />}

        {dataMostpopular && <CriticsGeneral data={dataMostpopular.items} />}
        {/* {!loadMostPopular && <CriticsGeneral data={dbIMDB250MostPopular.items}/>} */}
      </section>

      <section className="group-news-cine">
        {/* Inicio Noticias de Peliculas */}
        <section className="mt-5 w-100">
          {loadForNewsMovie && <Loader />}
          {dataNewsMovie && (
            <News title="CINE" data={dataNewsMovie} loading={loading} />
          )}
          {/* Inicio Solo prueba */}
          {/* <News title="CINE" data={dbNewsMovie} loading={valor} /> */}
          {/* Fin Solo prueba */}
        </section>
        {/* Fin Noticias de Peliculas */}
      </section>
    </main>
  );
};

export default Peliculas;
