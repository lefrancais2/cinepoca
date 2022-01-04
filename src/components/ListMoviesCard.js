const ListMoviesCard = ({ data }) => {
  return (
    <li className="slide slides-movies-today">
      <article>
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title}
          />
          <figcaption>
            <p>{data.title}</p>
          </figcaption>
        </figure>
      </article>
    </li>
  );
};

export default ListMoviesCard;
