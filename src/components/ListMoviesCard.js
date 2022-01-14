const ListMoviesCard = ({ data }) => {
  return (
    <li className="slide slides-movies-today">
      <article>
        <figure>
          <img
            src={
              (data.poster_path &&
                `https://image.tmdb.org/t/p/w500${data.poster_path}`) ||
              data.image
            }
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
