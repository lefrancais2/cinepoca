// import filmadora from '../assets/filmadora.svg';
import { useContext } from "react";
import { Link, Route } from "react-router-dom";
import cinta from "../assets/cinta_black.svg";
import AuthContext from "../context/AuthContext";

import "../styles/header.css";

const Header = () => {
  const { auth } = useContext(AuthContext);
  return (
    <header className="position-sticky top-0">
      <nav className="navbar navbar-expand-md navbar-light bg-warning">
        <div className="container-fluid items-navbar">
          <Link to="/" className="navbar-brand fw-bold">
            <img src={cinta} width="40" height="40" alt="" />
            <span className="title-header">CINEPOCA</span>
          </Link>
          {/* <a className="navbar-brand fw-bold" href="/">
            {/* <img src={filmadora} width="40" height="40" alt="" />
            <img src={cinta} width="40" height="40" alt="" />
            <span className="title-header">CINEPOCA</span>
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
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
                {/* <a className="nav-link active" aria-current="page" href="/">
                  PELICULAS
                </a> */}
              </li>
              <li className="nav-item">
                <Link to="/cartelera" className="nav-link">
                  CARTELERA
                </Link>
                {/* <a className="nav-link" href="/">
                  CARTELERA
                </a> */}
              </li>
              {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li> */}
              <li className="nav-item">
                <Link to="/noticias" className="nav-link">
                  NOTICIAS
                </Link>
                {/* <a className="nav-link" href="/">
                  NOTICIAS
                </a> */}
              </li>
              <li className="nav-item">
                <Link to="/series" className="nav-link">
                  SERIES
                </Link>
                {/* <a className="nav-link" href="/">
                  SERIES
                </a> */}
              </li>
            </ul>
            {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
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
