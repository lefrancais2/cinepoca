import { useLocation } from "react-router-dom";
import { addTime, Mes } from "../functions/functionDate";
import { searchData } from "../functions/functionsGeneral";
import CineTitle from "./CineTitle";

const SearchDataArticle = ({ data }) => {
  const { search } = useLocation();
  const id = new URLSearchParams(search);
  let movieData = searchData(data, id.get("id"));
  let fecha = new Date(addTime(movieData.release_date));
  return (
    <main className="flex-grow-1 bg-white bg-md-light container-page">
      <CineTitle />
      <section className="block-movie-search">
        <small>Información</small>
        <div className="title-movie-search">
          <h3>{movieData.title}</h3>
        </div>
        <figure className="images-movie-search">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`}
              alt={movieData.title}
            />
          </div>
          <div>
            <p>Poster oficial</p>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
              alt={movieData.title}
            />
          </div>
        </figure>
        <div className="info-movie-search">
          <p>
            <span>Idioma original:</span> {movieData.original_language}
          </p>
          <p>
            <span>Sinopsis:</span> {movieData.overview}
          </p>
          <p>
            <span>Puntuación:</span> {movieData.popularity}
          </p>
          <p>
            <span>Fecha de estreno:</span>{" "}
            {`${fecha.getDate()} de ${
              Mes[fecha.getMonth()]
            } de ${fecha.getFullYear()}`}
          </p>
        </div>
      </section>
    </main>
  );
};

export default SearchDataArticle;
