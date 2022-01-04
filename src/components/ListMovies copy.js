import React, { useEffect } from "react";
import Glide, {
  Controls,
  Breakpoints,
} from "@glidejs/glide/dist/glide.modular.esm";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "../styles/carousel-movies.css";
import ListMoviesCard from "./ListMoviesCard";

const sliderConfiguration = {
  type: "carousel",
  perView: 6,
  focusAt: "center",
  autoplay: true,
  peek: {
    before: "20",
    after: "20",
  },
  breakpoints: {
    800: {
      perView: 2,
    },
    480: {
      perView: 5,
    },
  },
};

const ListMovies = ({ title, loading, data }) => {
  const slider = new Glide(".glide", sliderConfiguration);

  useEffect(() => {
    return () => slider.mount({ Controls, Breakpoints });
  }, [slider]);

  return (
    <>
      <div className="d-flex flex-row justify-content-between pt-4">
        <h3 className="pb-1 mb-5">{title}</h3>
        <div className="d-inline">
          <i className="fas fa-chevron-circle-left"></i>
          <i className="fas fa-chevron-circle-right"></i>
        </div>
      </div>
      <div className="glide position-relative bg-light">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {data &&
              data.map((el, index) => <ListMoviesCard key={index} data={el} />)}

            {/* <li className="glide__slide">
              <article className="border border-dark">
                <figure>
                  <img src="https://placeimg.com/80/100/people" alt="" />
                </figure>
                <figcaption>
                  <p>Este es un ejemplo</p>
                </figcaption>
              </article>
            </li> */}
          </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left top-0 start-0 position-absolute btn-movies"
            data-glide-dir="<"
          >
            <i className="fas fa-chevron-circle-left"></i>
          </button>
          <button
            className="glide__arrow glide__arrow--right top-0 end-0 position-absolute btn-movies"
            data-glide-dir=">"
          >
            <i className="fas fa-chevron-circle-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default ListMovies;
