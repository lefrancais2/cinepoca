import React, { useState, useEffect } from "react";
import ListMoviesCard from "./ListMoviesCard";
import "../styles/main.css";
import "../styles/carousel-movies.css";

let initialStateRight = 20;
let initialStateLeft = 0;

const ListMovies = ({ clase, title, loading, data, num }) => {
  const [btnRight, setBtnRight] = useState(initialStateRight);
  const [btnLeft, setBtnLeft] = useState(initialStateLeft);
  const [elementRight, setElementRight] = useState(null);
  const [elementLeft, setElementLeft] = useState(null);

  let id = `btn-left-${num}`;

  useEffect(() => {
    //setElementLeft(
    //document.querySelector(".fas.fa-chevron-circle-left.btn-disable")
    let $elemento = document.getElementById(id);
    setElementLeft($elemento);
  }, [id]);

  const handleButton = (e) => {
    let $elements = document.querySelector(`${clase} .carousel .slides`);
    //console.log($elements);
    $elements.classList.remove(
      "carousel-image-0",
      "carousel-image-20",
      "carousel-image-40",
      "carousel-image-60",
      "carousel-image-80"
    );

    if (e.target.dataset.direction === "left") {
      $elements.classList.add(`carousel-image-${btnLeft}`);
      if (btnLeft >= 0) {
        setBtnLeft(btnLeft > 0 ? btnLeft - 20 : 0);
        setBtnRight(btnLeft + 20);
        if (!elementLeft) setElementLeft(e.target);
      }

      if (btnLeft === 0) {
        e.target.classList.add("btn-disable");
        return;
      }

      if (elementRight) elementRight.classList.remove("btn-disable");
    }

    if (e.target.dataset.direction === "right") {
      $elements.classList.add(`carousel-image-${btnRight}`);
      //let resta = btnRight - 20;
      if (btnRight < 80) {
        setBtnRight(btnRight + 20);
        setBtnLeft(btnRight - 20);
        if (!elementRight) setElementRight(e.target);
      }
      if (btnRight === 80) {
        e.target.classList.add("btn-disable");
        setBtnLeft(btnRight - 20);
      }
      if (elementLeft) elementLeft.classList.remove("btn-disable");
    }
  };
  return (
    <>
      <div className="d-flex flex-row justify-content-between pt-4 w-100">
        <h3 className="pb-1 fw-bold">{title}</h3>
        <div className="d-inline">
          <button onClick={handleButton} className="btn-movie-week">
            <i
              id={id}
              className="fas fa-chevron-circle-left btn-disable"
              data-direction="left"
              data-index="-33"
            ></i>
          </button>
          <button onClick={handleButton} className="btn-movie-cartelera">
            <i
              className="fas fa-chevron-circle-right"
              data-direction="right"
              data-index="0"
            ></i>
          </button>
        </div>
      </div>

      {/* <div className="streaming-carousel-btn">
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
      </div> */}
      <div className="carousel">
        <ul className="slides">
          {data &&
            data.map((el, index) => <ListMoviesCard key={index} data={el} />)}
        </ul>
      </div>
    </>
  );
};

export default ListMovies;
