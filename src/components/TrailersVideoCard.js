const TrailersVideoCard = ({ el }) => {
  return (
    <article className="trailers-movie-article">
      <a href={el.url} target="_blank" rel="noopener">
        <figure className="trailers-movie-figure">
          <img src={el.image} alt={el.title} />
          <div>
            <i className="far fa-play-circle"></i>
          </div>
          <figcaption>{`${el.title.slice(0, 30)}...`}</figcaption>
        </figure>
      </a>
    </article>
  );
};

export default TrailersVideoCard;
