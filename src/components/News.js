import Loader from "./Loader";
import NewsCard from "./NewsCard";

const onlyTest = {
  title: "'Titulares de noticias': Netflix, HBO, Amazon Prime Video, Disney+",
  urlToImage: "https://placeimg.com/240/135/nature",
  url: "#nada",
};

const News = ({ title, data, loading }) => {
  return (
    <div>
      <div className="subtitle-news">
        <h2 className="fw-bold">ÚLTIMAS NOTICIAS DE {title}</h2>
      </div>
      <div className="block-articles-movie-news">
        {/* Inicio Solucion realizada */}
        {/* {loading && <Loader/>}
                {data && data.map((el,index) => index < 5 ? <NewsCard key={index} element={el}/> : "")} */}
        {/* Fin Solucion realizada */}

        {/* Inicio Solo para pruebas */}
        {data &&
          data.articles.map((el, index) =>
            index < 6 ? <NewsCard key={index} element={el} /> : ""
          )}
        {/* {!data && <NewsCard element={onlyTest}/>} */}
        {/* Fin Solo para pruebas */}

        {/* <article className="d-flex flex-row justify-content-start bg-light">
                    <figure>
                        <div>
                            <img src="https://placeimg.com/240/135/nature" alt="" />
                        </div>
                    </figure>
                    <div className="block-info-movie-news">
                        <div className="news-info">
                            <h5 className="text-warning">NOTICIAS</h5>
                        </div>
                        <div className="link-title-news">
                            <a href="#dasd">
                                'Titulares de noticias': Netflix, HBO, Amazon Prime Video, Disney+
                            </a>
                        </div>
                    </div>
                </article> */}
      </div>
    </div>
  );
};

export default News;
