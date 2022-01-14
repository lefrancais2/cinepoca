import { useContext, useEffect, useState } from "react";

// components
import ApiContext from "../context/ApiContext";
import ListMovies from "../components/ListMovies";
import CineTitle from "../components/CineTitle";
import Carousel from "../components/Carousel";
import News from "../components/News";
import Loader from "../components/Loader";
import StreamingCarouselSeries from "../components/StreamingCarouselSeries";
import StreamingCarouselMovie from "../components/StreamingCarouselMovie";
import BestIMDBSeries from "../components/BestIMDBSeries";
import WhereActually from "../components/WhereActually";

// stylesheets
import "../styles/main.css";
import "../styles/all-page.css";
import "../styles/peliculas.css";

//Others
import { dbBestShowStreaming } from "../api/dbNews";
import { helpHttp } from "../helpers/helpHttp";
import { urlIMDBAllSeries, urlIMDBBestSeries } from "../api/service";

const Series = () => {
  const [dataIMDBBestSeries, setDataIMDBBestSeries] = useState(null);
  const [loadIMDBBestSeries, setLoadIMDBBestSeries] = useState(false);
  const [dataIMDBAllSeries, setDataIMDBAllSeries] = useState(null);
  const [loadIMDBAllSeries, setLoadIMDBAllSeries] = useState(false);
  const {
    dataNewsSerie,
    dataNewsActually,
    loading,
    loadForNewsSerie,
    loadForDataCarousel,
  } = useContext(ApiContext);

  useEffect(() => {
    const getData = async () => {
      setLoadIMDBBestSeries(true);
      const [data] = await Promise.all([helpHttp().get(urlIMDBBestSeries)]);
      setDataIMDBBestSeries(data);
    };
    getData();
    setLoadIMDBBestSeries(false);

    const getDataAllSeries = async () => {
      setLoadIMDBAllSeries(true);
      const [data] = await Promise.all([helpHttp().get(urlIMDBAllSeries)]);
      setDataIMDBAllSeries(data);
    };
    getDataAllSeries();
    setLoadIMDBAllSeries(false);
  }, []);

  return (
    <main className="flex-grow-1 bg-white bg-md-light container-page">
      {/* Inicio Titulo Pagina */}
      <CineTitle display="" alto="50" ancho="30" />
      {/* Fin Titulo Pagina */}

      {/* Ubicacion ruta absoluta */}
      <section>
        <WhereActually site="Series" />
      </section>
      {/* Ubicacion ruta absoluta */}

      <section className="my-4">
        <aside className="d-flex flex-row justify-content-center align-content-center">
          <h2 className="fw-bold">SERIES</h2>
        </aside>
      </section>

      {/* Inicio Carousel */}
      <section>
        {loadForDataCarousel && <Loader />}
        {console.log("dataNewsActually", dataNewsActually)}
        {dataNewsActually && (
          <Carousel data={dataNewsActually} loading={loadForDataCarousel} />
        )}
        {/* Inicio solo para prueba */}
        {/* <Carousel data={dbNewsActuallyCarousel.news} loading={loading} /> */}
        {/* Fin solo para prueba */}
      </section>
      {/* Fin Carousel */}

      <section className="group-premiere-cartelera">
        <div className="first-group">
          {/* Inicio Estrenos de esta semana */}
          <section className="mt-4 w-100 d-flex flex-row flex-wrap justify-content-start align-items-center estreno-carousel">
            {dbBestShowStreaming && (
              <ListMovies
                clase=".estreno-carousel"
                title="TOP SERIES DE LA SEMANA"
                loading={loading}
                data={dbBestShowStreaming.results}
                id="0"
                limit={15}
              />
            )}
          </section>
          {/* Fin Estrenos */}

          {/* Inicio Cartelera */}
          <section className="mt-4 w-100 d-flex flex-row flex-wrap justify-content-start align-items-center cartelera-carousel">
            {/* <ListMovies title="CARTELERA" loading={loading} data={dataMovieToday} /> */}
            {/* Solo para prueba */}
            {loadIMDBBestSeries && <Loader />}
            {dataIMDBBestSeries && (
              <ListMovies
                clase=".cartelera-carousel"
                title="LAS MEJORES SERIES"
                loading={loadIMDBBestSeries}
                data={dataIMDBBestSeries.items}
                id="1"
                limit={15}
              />
            )}
            {/* Solo para prueba */}
          </section>
          {/* Fin Cartelera */}
        </div>
      </section>
      <section>
        <aside className="title-streaming title-streaming-top">
          <h2>Ranking IMDb</h2>
        </aside>
        {loadIMDBAllSeries && <Loader />}
        {dataIMDBAllSeries && (
          <BestIMDBSeries data={dataIMDBAllSeries.results} />
        )}
        {/* <BestIMDBSeries data={dbIMDBAllSeries.results} /> */}
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
          {loadForNewsSerie && <Loader />}
          {dataNewsSerie && (
            <News
              title="SERIES"
              data={dataNewsSerie}
              loading={loadForNewsSerie}
            />
          )}
          {/* Inicio Solo prueba */}
          {/* <News title="SERIES" data={dbNewsSeries} loading={loadForNewsSerie} /> */}
          {/* Fin Solo prueba */}
        </section>
        {/* Fin Noticias de Series */}
      </section>
    </main>
  );
};

export default Series;
