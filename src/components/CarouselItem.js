const CarouselItem = ({ element, active }) => {
  return (
    <div className={`carousel-item ${active}`}>
      <figure className="m-0">
        <img
          src={element.image}
          className="d-block w-100 img-carousel"
          alt="fotos trucadas"
          style={{ objectFit: "cover" }}
        />
      </figure>
      <div className="d-block d-md-none bg-black text-white carousel-title">
        <h5>{element.title}</h5>
      </div>

      <div className="carousel-title-md d-none d-md-block">
        <h5 className="text-white fw-bold fs-1">{element.title}</h5>
      </div>
    </div>
  );
};

export default CarouselItem;
