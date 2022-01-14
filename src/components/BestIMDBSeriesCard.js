const BestIMDBSeriesCard = ({ el }) => {
  return (
    <article className="mx-3">
      <div>
        <figure>
          <img src={el.image} alt={el.title} width="150" height="210" />
        </figure>
        <figcaption>{el.title}</figcaption>
      </div>
      <div>
        <p>Puntuación: {el.imDbRating}</p>
      </div>
    </article>
  );
};

export default BestIMDBSeriesCard;
