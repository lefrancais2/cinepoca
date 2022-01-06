import CineTitle from "./CineTitle";
import "../styles/search.css";
import SearchDataCard from "./SearchDataCard";

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
          {data.results &&
            data.results.map((el, index) => (
              <SearchDataCard key={index} el={el} />
            ))}
          {data.results.length === 0 && (
            <div style={{ width: "100%", height: "50vh" }}>
              <h2 style={{ textAlign: "center", fontSize: "4rem" }}>
                The movie is not found!!
              </h2>
            </div>
          )}
        </section>
      </section>
    </main>
  );
};

export default SearchData;
