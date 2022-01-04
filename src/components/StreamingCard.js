import "../styles/main.css";

const StreamingCard = ({ title, subtitle, element }) => {
  //console.log(element);
  return (
    <a className="streaming-card text-decoration-none" href="#ads">
      <figure className="d-flex flex-row flex-wrap align-items-start justify-content-start">
        {element &&
          element.map((el, index) => (
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/w500${el.backdrop_path}`}
              //src={`https://placeimg.com/80/220/any`}
              width="80"
              height="220"
              alt=""
            />
          ))}

        {!element && (
          <img
            src="https://placeimg.com/80/220/people"
            width="80"
            height="220"
            alt=""
          />
        )}
        {!element && (
          <img
            src="https://placeimg.com/80/220/people"
            width="80"
            height="220"
            alt=""
          />
        )}
        {!element && (
          <img
            src="https://placeimg.com/80/220/arch"
            width="80"
            height="220"
            alt=""
          />
        )}
        {!element && (
          <img
            src="https://placeimg.com/80/220/nature"
            width="80"
            height="220"
            alt=""
          />
        )}
      </figure>
      <figcaption className="layer">
        <div>
          <p>
            LAS MEJORES {title} <br />
            <strong>{subtitle}</strong>
          </p>
        </div>
      </figcaption>
    </a>
  );
};

export default StreamingCard;
