import { Link } from "react-router-dom";
import { convertToSlug } from "../functions/functionsGeneral";

const SearchDataCard = ({ el }) => {
  return (
    <>
      <article className="articles-search">
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
            alt={el.title}
          />
        </figure>
        <div className="info-search">
          <Link
            to={`/busqueda/articulo/${convertToSlug(el.title)}?id=${el.id}`}
          >
            <p className="titleMovie-search">{el.title}</p>
            <p className="year-search">
              <small>Año: {new Date(el.release_date).getFullYear()}</small>
            </p>
          </Link>
          {/* <small className="type-search">
            Tipo: {el.Type === "movie" ? "Película" : el.Type}
          </small> */}
        </div>
      </article>
    </>
  );
};

export default SearchDataCard;
