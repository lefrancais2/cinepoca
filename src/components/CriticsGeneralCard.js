import { Link } from "react-router-dom";
import { convertToSlug } from "../functions/functionsGeneral";
import "../styles/stars.css";

const CriticsGeneralCard = ({ el }) => {
  return (
    <>
      <article>
        <Link
          to={`/pelicula/critica/${convertToSlug(el.title.toLowerCase())}?id=${
            el.id
          }`}
        >
          <figure>
            <img src={el.image} alt="" />
            <figcaption>{el.title}</figcaption>
          </figure>
          <p>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </p>
          <div className="stars-outer">
            <div className="stars-inner"></div>
          </div>
        </Link>
      </article>
    </>
  );
};

export default CriticsGeneralCard;
