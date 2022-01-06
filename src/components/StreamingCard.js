import "../styles/main.css";

const StreamingCard = ({ title, subtitle, element }) => {
  //console.log(element);

  let movies = "";
  element.forEach((el) => {
    if (el.title) movies += `${el.title}, `;
    else movies += el.name;
  });
  return (
    <a className="streaming-card text-decoration-none" href="#ads">
      <figure className="d-flex flex-row flex-wrap align-items-start justify-content-start mb-0">
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
      <p
        style={{
          width: "320px",
          fontSize: "10px",
          height: "20px",
          color: "gray",
        }}
      >
        {movies}
      </p>
    </a>
  );
};

export default StreamingCard;
