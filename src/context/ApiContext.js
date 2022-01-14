import { createContext, useEffect, useState } from "react";

import {
  urlMovieSearch,
  urlMovieToday,
  urlMovieWeek,
  urlNewsActually,
  urlNewsMovie,
  urlNewsSeries,
  urlIMDBtarilers,
} from "../api/service";

//Borrar luego cuando funcionen las api
import {
  dbMovieWeek,
  dbMovieToday,
  dbNewsMovie,
  dbNewsSeries,
  dbNewsActuallyCarousel,
  dbIMDBTrailersYoutube,
} from "../api/dbNews";
//Fin de borrado

import { helpHttp } from "../helpers/helpHttp";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [dataNewsMovie, setDataNewsMovie] = useState(null);
  const [dataNewsSerie, setDataNewsSerie] = useState(null);
  const [dataMovieToday, setDataMovieToday] = useState(null);
  const [dataMovieWeek, setDataMovieWeek] = useState(null);
  const [dataNewsActually, setDataNewsActually] = useState(null); //Para el carousel principal
  const [dataMovieTrailers, setDataMovieTrailers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadForNewsMovie, setLoadForNewsMovie] = useState(false);
  const [loadForNewsSerie, setLoadForNewsSerie] = useState(false);
  const [loadForMovieToday, setLoadForMovieToday] = useState(false);
  const [loadForDataCarousel, setLoadForDataCarousel] = useState(false);

  useEffect(() => {
    //   Busqueda de noticias de cine
    // (async () => {
    //   setLoadForNewsMovie(true);
    //   helpHttp()
    //     .get(
    //       "https://newsapi.org/v2/everything?q=movie&apiKey=22e0325d46b74ecaa518a4ab9e8d661f"
    //     )
    //     .then((res) => {
    //       console.log("res", res);
    //       setDataNewsMovie(res);
    //     });
    //   setLoadForNewsMovie(false);
    //   console.log("dataNewsMovie", dataNewsMovie);
    // })();
    setLoadForNewsMovie(true);
    const getDataNews = async () => {
      const [news] = await Promise.all([helpHttp(10000).get(urlNewsMovie)]);
      setDataNewsMovie(news);
      console.log("news 2", dataNewsMovie);
    };
    getDataNews();
    setLoadForNewsMovie(false);
    //   Fin de busqueda de noticias de cine

    // Busqueda de noticias de series
    setLoadForNewsSerie(true);
    const getDataNewSeries = async () => {
      const [newsSeries] = await Promise.all([
        helpHttp(10000).get(urlNewsSeries),
      ]);
      setDataNewsSerie(newsSeries);
    };
    getDataNewSeries();
    setLoadForNewsSerie(false);
    // Fin Busqueda de noticias de series

    //Busqueda de Peliculas de actualidad
    setLoadForMovieToday(true);
    const getData = async () => {
      const [dataMToday] = await Promise.all([
        helpHttp(10000).get(urlMovieToday),
      ]);
      console.log(dataMToday);
      setDataMovieToday(dataMToday);
    };
    getData();
    setLoadForMovieToday(false);
    // Fin de Busqueda de Peliculas de actualidad

    //Busqueda de Peliculas de actualidad
    setLoadForMovieToday(true);
    const getDataMovieWeek = async () => {
      const [dataMWeek] = await Promise.all([
        helpHttp(10000).get(urlMovieWeek),
      ]);
      console.log(dataMWeek);
      setDataMovieWeek(dataMWeek);
    };
    getDataMovieWeek();
    setLoadForMovieToday(false);
    // Fin de Busqueda de Peliculas de actualidad

    //Datos para el carousel principal
    setLoadForDataCarousel(true);

    const getDataCarousel = async () => {
      const [dataCarousel] = await Promise.all([
        helpHttp(20000).get(urlNewsActually),
      ]);
      setDataNewsActually(dataCarousel);
      setLoadForDataCarousel(false);
    };
    getDataCarousel();
    //Datos para el carousel principal
  }, []);

  //   const data = {
  //   dataNewsMovie,
  //   dataNewsSerie,
  //   dataMovieToday,
  //   dataMovieWeek,
  //   dataNewsActually,
  //   loading,
  //   };

  //Borrar luego de funcionamieno de las api
  const data = {
    //dbMovieWeek,
    dataMovieWeek,
    //dbMovieToday,
    dataMovieToday,
    //dbNewsMovie,
    dataNewsMovie,
    //dbNewsSeries,
    dataNewsSerie,
    //dbNewsActuallyCarousel,
    dataNewsActually,
    dbIMDBTrailersYoutube,
    loading,
    loadForNewsMovie,
    loadForNewsSerie,
    loadForMovieToday,
    loadForDataCarousel,
  };
  //Fin de Borrado luego de funcionamieno de las api

  return <ApiContext.Provider value={data}>{children}</ApiContext.Provider>;
};

export { ApiProvider };

export default ApiContext;
