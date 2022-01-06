// import filmadora from '../assets/filmadora.svg';
import { useContext } from "react";
import { Link, Route, useNavigate } from "react-router-dom";
import cinta from "../assets/cinta_black.svg";
import AuthContext from "../context/AuthContext";

import { helpHttp } from "../helpers/helpHttp";
import { urlMovieSearch } from "../api/service";
import { convertToSlug } from "../functions/functionsGeneral";

import "../styles/header.css";

const Header = ({ dataMovieSearch, setDataMovieSearch }) => {
  const { auth } = useContext(AuthContext);

  const handleSearchIcon = (e) => {
    let $element = document.getElementById("layer-opacity");
    $element.classList.toggle("layer-active");
  };

  const navigate = useNavigate();

  const handleKeyCode = (e) => {
    if (e.charCode === 13) {
      let $element = document.getElementById("layer-opacity");
      $element.classList.add("layer-active");
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (e.target.search.value) {
      let anio = /[1|2][0-9]{3}/g;
      let urlSearchMovie = "";
      if (anio.test(e.target.search.value)) {
        //urlSearchMovie = `http://www.omdbapi.com/?apikey=d2900ed9&s=${e.target.search.value}&y=${e.target.search.value}`;
        urlSearchMovie = urlMovieSearch(
          e.target.search.value,
          e.target.search.value
        );
      } else {
        //urlSearchMovie = `http://www.omdbapi.com/?apikey=d2900ed9&s=${e.target.search.value}`;
        urlSearchMovie = urlMovieSearch(e.target.search.value);
      }
      const [data] = await Promise.all([helpHttp().get(urlSearchMovie)]);
      setDataMovieSearch(data);
      let params = convertToSlug(e.target.search.value);
      e.target.search.value = "";

      navigate(`/busqueda/${params}`, { dataMovieSearch });
    }
  };

  return (
    <header className="position-sticky top-0">
      <nav className="navbar navbar-expand-md navbar-light bg-warning">
        <div className="container-fluid items-navbar">
          <Link to="/" className="navbar-brand fw-bold flex-grow-1">
            <img src={cinta} width="40" height="40" alt="" />
            <span className="title-header">CINEPOCA</span>
          </Link>

          <div className="d-md-none" style={{ marginRight: "10px" }}>
            <button onClick={handleSearchIcon} className="icon-search">
              <i className="fas fa-search search-layer"></i>
            </button>
            <div id="layer-opacity" className="layer-active select-layer">
              <div className="form-search-layer">
                <form onSubmit={handleSearch}>
                  <input
                    onKeyPress={handleKeyCode}
                    type="search"
                    name="search"
                    placeholder="Introduce el nombre de pelicula"
                    autoSave="off"
                    autoComplete="off"
                  />
                </form>
              </div>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ padding: "0", border: "none" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/peliculas"
                  className="nav-link active"
                  aria-current="page"
                >
                  PELICULAS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cartelera" className="nav-link">
                  CARTELERA
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/noticias" className="nav-link">
                  NOTICIAS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/series" className="nav-link">
                  SERIES
                </Link>
              </li>
              <li className="d-md-none">
                {!auth && (
                  <Link to="/login" className="btn btn-primary">
                    LOGIN/REGISTER<i className="fas fa-user"></i>
                  </Link>
                )}
                {auth && (
                  <Link to="/dashboard" className="btn btn-primary">
                    Mi perfil
                  </Link>
                )}
              </li>
            </ul>

            <div className="d-none d-md-block btn-login-register">
              {!auth && (
                <Link to="/login" className="btn btn-primary">
                  LOGIN/REGISTER<i className="fas fa-user"></i>
                </Link>
              )}
              {auth && (
                <Link to="/dashboard" className="btn btn-primary">
                  Mi perfil
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
      <section className="header-message ">
        <div>
          <small>
            Descubre la cartelera, los últimos tráilers, las mejores noticias,
            nuestros especiales de cine y series y mucho más...
          </small>
        </div>
      </section>
    </header>
  );
};

export default Header;
