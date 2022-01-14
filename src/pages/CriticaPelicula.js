import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { urlCriticMostPopular } from "../api/service";
import { helpHttp } from "../helpers/helpHttp";
import CineTitle from "../components/CineTitle";
import MovieCriticsContext from "../context/MovieCriticsContext";
import ListEstrenosMasEsperados from "../components/ListEstrenosMasEsperados";

const CriticaPelicula = ({ data }) => {
  const { search } = useLocation();
  const id = new URLSearchParams(search);
  const idIMDB = id.get("id");
  const [dataCritics, setDataCritics] = useState(null);
  const { dataForCritics } = useContext(MovieCriticsContext);
  const [selectData, setSelectData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      await helpHttp()
        .get(urlCriticMostPopular(idIMDB))
        .then((res) => setDataCritics(res));
    };
    getData();

    dataForCritics.forEach((el) => {
      if (el.id === idIMDB) {
        setSelectData(el);
        return;
      }
    });
  }, [idIMDB]);

  return (
    <main className="flex-grow-1 bg-white bg-md-light container-page">
      {/* Inicio Titulo Pagina */}
      <CineTitle display="" alto="50" ancho="30" />
      {/* Fin Titulo Pagina */}
      <section className="mt-4 mx-4 block-critic-movie">
        <div>
          <article>
            <h3>{selectData && selectData.title}</h3>
            <figure>
              <img
                src={selectData && selectData.image}
                alt={selectData && selectData.title}
                style={{}}
              />
            </figure>
          </article>
          {dataCritics &&
            dataCritics.items.map((el, index) => (
              <div key={index} className="border-bottom">
                <h4>{el.publisher}</h4>
                <p>{el.content}</p>
                <p>
                  <span>Puntuación:</span>
                  {el.rate}
                </p>
              </div>
            ))}
        </div>
        <div className="d-none d-md-none d-lg-block">
          <div className="second-group">
            {/* Inicio Los Estrenos mas esperados */}
            <section className="mt-5 w-100">
              <ListEstrenosMasEsperados />
            </section>
            {/* Fin Los Estrenos mas esperados */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CriticaPelicula;
