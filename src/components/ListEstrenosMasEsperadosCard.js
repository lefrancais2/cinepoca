import { addTime, Mes } from "../functions/functionDate";

const ListEstrenosMasEsperadosCard = ({ element }) => {
  let url = `https://youtube.com/watch=?`;
  let addDate = addTime(element.release_date);
  let fecha = new Date(addDate);
  let fechaPublicacion = `${fecha.getDate()} de ${
    Mes[fecha.getMonth()]
  } de ${fecha.getFullYear()}`;

  return (
    <article className="estrenos-esperados-article border-bottom">
      <div className="estrenos-esperados-pelicula">
        <p>
          <strong>{element.title}</strong>
        </p>
        <small>{fechaPublicacion}</small>
      </div>
      <div className="estrenos-esperados-cine">
        <span>en cine</span>
        <a href={url}>
          <i className="far fa-play-circle"></i>
        </a>
      </div>
    </article>
  );
};

export default ListEstrenosMasEsperadosCard;
