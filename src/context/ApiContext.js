import { createContext, useEffect, useState } from "react";

import {
  urlMovieToday,
  urlMovieWeek,
  urlNewsActually,
  urlNewsMovie,
  urlNewsSeries,
} from "../api/service";

//Borrar luego cuando funcionen las api
import {
  dbMovieWeek,
  dbMovieToday,
  dbNewsMovie,
  dbNewsSeries,
  dbNewsActuallyCarousel,
} from "../api/dbNews";
//Fin de borrado

import { helpHttp } from "../helpers/helpHttp";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [dataNewsMovie, setDataNewsMovie] = useState(null);
  const [dataNewsSerie, setDataNewsSerie] = useState(null);
  const [dataMovieToday, setDataMovieToday] = useState(null);
  const [dataMovieWeek, setdataMovieWeek] = useState(null);
  const [dataNewsActually, setDataNewsActually] = useState(null); //Para el carousel principal
  const [loading, setLoading] = useState(false);

  let urlFakeApi = "http://localhost:5000/articles";
  useEffect(() => {
    //   Busqueda de noticias de cine
    setLoading(true);
    //helpHttp().get(urlNewsMovie)
    helpHttp()
      .get(urlFakeApi)
      .then((res) => {
        setDataNewsMovie(res);
        setLoading(false);
      });
    //   Fin de busqueda de noticias de cine

    // Busqueda de noticias de series
    setLoading(true);
    //helpHttp().get(urlNewsSeries)
    helpHttp()
      .get(urlFakeApi)
      .then((res) => {
        setDataNewsSerie(res);
        setLoading(false);
      });
    // Fin Busqueda de noticias de series
  }, [urlFakeApi]);

  //Por si acaso, pero no creo que sirva
  //   useEffect(() => {
  //     setLoading(true);
  //     //helpHttp().get(urlNewsSeries)
  //     helpHttp()
  //       .get(urlFakeApi)
  //       .then((res) => {
  //         setDataNewsSerie(res);
  //         setLoading(false);
  //       });
  //   }, [urlFakeApi]);

  //   useEffect(() => {
  //     setLoading(true);
  //     const getData = async () => {
  //       const [dataMToday, dataMWeek] = await Promise.all([
  //            helpHttp().get(urlMovieToday),
  //            helpHttp().get(urlMovieWeek)
  //        ]);
  //       setDataMovieToday(dataMToday);
  //       setdataMovieWeek(dataMWeek);
  //     };
  //     getData();
  //     setLoading(false);
  //   }, [urlMovieToday,urlMovieWeek]);

  //   useEffect(() => {
  //     setLoading(true);
  //     const getDataCarousel = async () => {
  //       const dataCarousel = await Promise.all([
  //         helpHttp().get(urlNewsActually)
  //       ])
  //       setDataNewsActually(dataCarousel);
  //       setLoading(false);
  //     }
  //     getDataCarousel();
  //   }, [urlNewsActually]);

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
    dbMovieWeek,
    dbMovieToday,
    dbNewsMovie,
    dbNewsSeries,
    dbNewsActuallyCarousel,
    loading,
  };
  //Fin de Borrado luego de funcionamieno de las api

  return <ApiContext.Provider value={data}>{children}</ApiContext.Provider>;
};

export { ApiProvider };

export default ApiContext;
