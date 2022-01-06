import React, { useEffect, useState } from "react";
import StreamingCard from "./StreamingCard";
import { dbBestMovieStreaming } from "../api/dbNews";
import { helpHttp } from "../helpers/helpHttp";
import "../styles/main.css";
import "../styles/carousel-movies.css";

let initialStateRight = 33;
let initialStateLeft = 0;

const StreamingCarouselMovie = () => {
  const [btnRight, setBtnRight] = useState(initialStateRight);
  const [btnLeft, setBtnLeft] = useState(initialStateLeft);

  const [dataMovie, setDataMovie] = useState(null);
  const [dataAmazon, setDataAmazon] = useState([]);
  const [dataNetflix, setDataNetflix] = useState([]);
  const [dataHBO, setDataHBO] = useState([]);
  const [dataDisney, setDataDisney] = useState([]);

  let token = "da6bf5b57ea46ebcbbb30175966e23a6";
  let url1 = `https://api.themoviedb.org/3/trending/movie/day?api_key=${token}&page=1`,
    url2 = `https://api.themoviedb.org/3/trending/movie/day?api_key=${token}&page=2`;

  //https://api.themoviedb.org/3/trending/movie/day?api_key=da6bf5b57ea46ebcbbb30175966e23a6&page=1

  useEffect(() => {
    const getData = async () => {
      //const [data1] = await Promise.all([helpHttp().get(url1)]);
      //setDataMovie(data1);
      // setDataNetflix(divideMovies(data1.results));
      // setDataAmazon(divideMovies(data1.results, 4));
      // setDataHBO(divideMovies(data1.results, 8));
      // setDataDisney(divideMovies(data1.results, 12));
      setDataNetflix(divideMovies(dbBestMovieStreaming.results));
      setDataAmazon(divideMovies(dbBestMovieStreaming.results, 4));
      setDataHBO(divideMovies(dbBestMovieStreaming.results, 8));
      setDataDisney(divideMovies(dbBestMovieStreaming.results, 12));
    };
    getData();
  }, [url1]);

  const handleButton = (e) => {
    let $elements = document.querySelector(
      ".streaming-carousel .carousel .slides"
    );
    $elements.classList.remove(
      "carousel-image-0",
      "carousel-image-33",
      "carousel-image-66"
    );

    if (e.target.dataset.direction === "left") {
      $elements.classList.add(`carousel-image-${btnLeft}`);
      if (btnLeft >= 33) {
        setBtnLeft(btnLeft - 33);
      }
      if (btnRight === 66) {
        setBtnRight(btnRight - 33);
      }
    }

    if (e.target.dataset.direction === "right") {
      let clase = `carousel-image-${btnRight}`;
      $elements.classList.add(clase);
      if (btnRight <= 33) {
        setBtnRight(btnRight + 33);
      }
      if (btnRight === 66) {
        setBtnLeft(33);
      }
    }
  };

  const divideMovies = (dataMovie, index = 0, size = 4) => {
    let auxArray = [];
    for (let i = index, cont = 0; cont < size; i++) {
      auxArray.push(dataMovie[i]);
      cont++;
    }
    return auxArray;
  };

  return (
    <>
      <div className="streaming-carousel-btn">
        <button
          onClick={handleButton}
          className="btn-slider-left position-absolute"
        >
          <i
            className="fas fa-chevron-circle-left"
            data-direction="left"
            data-index="-33"
          ></i>
        </button>
        <button
          onClick={handleButton}
          className="btn-slider-right position-absolute"
        >
          <i
            className="fas fa-chevron-circle-right"
            data-direction="right"
            data-index="0"
          ></i>
        </button>
      </div>
      <div className="carousel">
        <ul className="slides">
          <li className="slide">
            <StreamingCard
              title="PELICULAS"
              subtitle="EN AMAZON PRIME VIDEO"
              element={dataAmazon}
            />
          </li>
          <li className="slide">
            <StreamingCard
              title="PELICULAS"
              subtitle="EN NETFLIX"
              element={dataNetflix}
            />
          </li>
          <li className="slide">
            <StreamingCard
              title="PELICULAS"
              subtitle="EN HBO"
              element={dataDisney}
            />
          </li>
          <li className="slide">
            <StreamingCard
              title="PELICULAS"
              subtitle="EN DISNEY+"
              element={dataHBO}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default StreamingCarouselMovie;
