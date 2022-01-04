import { useEffect, useState } from "react";
import { dbNextPremiere } from "../api/dbNews";
import { helpHttp } from "../helpers/helpHttp";
import ListEstrenosMasEsperadosCard from "./ListEstrenosMasEsperadosCard";

const ListEstrenosMasEsperados = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [widthScreen, setWidthScreen] = useState(null);

  // Solo para prueba
  const valor = false;

  let token = "da6bf5b57ea46ebcbbb30175966e23a6";
  let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${token}&language=es`;

  // useEffect(() => {
  //     const getData = async () => {
  //         setLoading(true);
  //         const [movieData] = await Promise.all([
  //             helpHttp().get(url)
  //         ]);
  //         setData(movieData);
  //     };
  //     getData();
  //     setLoading(false);
  // }, [url]);

  // Inicio Solo para prueba
  useEffect(() => {
    setData(dbNextPremiere);

    setLoading(false);
  }, []);
  // Fin Solo para prueba

  const handleButtonMore = (e) => {
    let $link = document.querySelector(".collapse-premiere");
    $link.style.display = "none";
  };

  return (
    <>
      <div className="estrenos-esperados-title">
        <h3 className="fw-bold">LOS ESTRENOS MÁS ESPERADOS</h3>
        <small className="text-black-50">Ranking de las últimas 24 horas</small>
      </div>

      {/* {data && data.results.map((element,index) => <ListEstrenosMasEsperadosCard element={element}/>)} */}
      {/* Listo - acabado solo borrar los de ejemplo */}
      {/* {data && data.results.map((element,index) => index < 5 ? <ListEstrenosMasEsperadosCard key={index} element={element}/> : "")}
            <p className="collapse-premiere" onClick={handleButtonMore}>
                <a className="text-decoration-none" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Ver más películas <i className="fas fa-chevron-down"></i>
                </a>
            </p>
            <div className="collapse" id="collapseExample">
                <div>
                    {data && data.results.map((element,index) => index >= 5 && index < 8 ? <ListEstrenosMasEsperadosCard key={index} element={element}/> : "")}
                </div>
            </div> */}
      {/* Fin de acabado */}

      {/* Inicio solo para pruebas */}
      {data &&
        data.results.map((element, index) =>
          index < 5 ? (
            <ListEstrenosMasEsperadosCard key={index} element={element} />
          ) : (
            ""
          )
        )}
      <p className="collapse-premiere" onClick={handleButtonMore}>
        <a
          className="text-decoration-none"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Ver más películas <i className="fas fa-chevron-down"></i>
        </a>
      </p>
      <div className="collapse show-elements-premiere" id="collapseExample">
        <div>
          {data &&
            data.results.map((element, index) =>
              index >= 5 && index < 8 ? (
                <ListEstrenosMasEsperadosCard key={index} element={element} />
              ) : (
                ""
              )
            )}
        </div>
      </div>
      {/* Fin solo para pruebas */}

      {/* Ejemplo */}
      {/* <article className="estrenos-esperados-article border-bottom">
                <div className="estrenos-esperados-pelicula">
                    <p><strong>Doctor Strange: En el Multiverso de la Locura</strong></p>
                    <small>6 de mayo de 2022</small>
                </div>
                <div className="estrenos-esperados-cine">
                    <span>en cine</span>
                    <a href="#ahorA"><i className="far fa-play-circle"></i></a>
                </div>
            </article> */}
    </>
  );
};

export default ListEstrenosMasEsperados;
