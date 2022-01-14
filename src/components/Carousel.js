import "../styles/main.css";
import CarouselItem from "./CarouselItem";
import Loader from "./Loader";

const Carousel = ({ data, loading }) => {
  const searchCategory = (element) => {
    for (let i = 0; i < element.length; i++) {
      if (element[i] === "kpop") return false;
    }
    return true;
  };
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide mx-lg-auto"
      data-bs-ride="carousel"
    >
      {/* <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div> */}
      <div className="carousel-inner">
        {/* {loading && <Loader />} */}
        {data &&
          data.news.map((el, index) =>
            index === 0 ? (
              <CarouselItem key={index} element={el} active="active" />
            ) : el.image !== "None" && searchCategory(el.category) ? (
              <CarouselItem key={index} element={el} active="" />
            ) : (
              ""
            )
          )}

        {/*           
        <div className="carousel-item active" data-index="1">
          <figure className="m-0">
            <img
              src="https://placeimg.com/800/400/animals"
              className="d-block w-100 img-carousel"
              alt="fotos trucadas"
            />
          </figure>
          <div className="d-block d-md-none bg-black text-white p-2">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item" data-index="2">
          <figure className="m-0">
            <img
              src="https://placeimg.com/800/400/people"
              className="d-block w-100 img-carousel"
              alt="fotos trucadas"
            />
          </figure>
          <div className="d-block d-md-none bg-black text-white p-2">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item" data-index="3">
          <figure className="m-0">
            <img
              src="https://placeimg.com/800/400/arch"
              className="d-block w-100 img-carousel"
              alt="fotos trucadas"
            />
          </figure>
          <div className="d-block d-md-none bg-black text-white p-2">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div> */}
        <div className="carousel-info-number">
          <p>1/12</p>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
