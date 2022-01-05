import CineTitle from "./CineTitle";
import "../styles/search.css";

const SearchData = ({ data }) => {
  //console.log(data);

  return (
    <main className="flex-grow-1 bg-white bg-md-light container-page">
      <CineTitle />
      <section className="title-search">
        <h3>Resultados de la búsqueda</h3>
      </section>
      <section className="bg-white">
        <section className="block-search">
          {data.Search &&
            data.Search.map((el, index) => (
              <article key={index} className="articles-search">
                <figure>
                  <img src={el.Poster} alt={el.Title} />
                </figure>
                <div className="info-search">
                  <p className="titleMovie-search">{el.Title}</p>
                  <p className="year-search">
                    <small>Año: {el.Year}</small>
                  </p>
                  <small className="type-search">
                    Tipo: {el.Type === "movie" ? "Película" : el.Type}
                  </small>
                </div>
              </article>
            ))}
          {data.Error && (
            <div style={{ width: "100%", height: "50vh" }}>
              <h2 style={{ textAlign: "center", fontSize: "4rem" }}>
                {data.Error}
              </h2>
            </div>
          )}
        </section>
      </section>
    </main>
  );
};

export default SearchData;
