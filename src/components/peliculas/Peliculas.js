import { useEffect } from "react";
import Carousel from "../Carousel";
import CineTitle from "../CineTitle";

const Peliculas = () => {
  return (
    <main className="flex-grow-1 bg-white bg-md-light container-page">
      <CineTitle />

      <section>
        <Carousel />
      </section>
    </main>
  );
};

export default Peliculas;
