import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import { navBarList, btnList } from "./functions/functionURL";

// Components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ArrowUp from "./components/ArrowUp";

// Utilizados para el enrutamiento
import Peliculas from "./components/peliculas/Peliculas";
import Cartelera from "./components/cartelera/Cartelera";
import Noticias from "./components/noticias/Noticias";
import Series from "./components/series/Series";
import Login from "./components/login/Login";

import PeliculasRecomendadas from "./components/peliculas/PeliculasRecomendadas";
import Error404 from "./components/Error404";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import SearchData from "./components/SearchData";
import { ApiProvider } from "./context/ApiContext";

function App() {
  const [dataMovieSearch, setDataMovieSearch] = useState(null);

  document.addEventListener("click", (e) => {
    let texto = e.target.innerText;
    if (btnList(navBarList, texto.toLowerCase())) {
      let $elements = document.querySelectorAll(".nav-item .nav-link");
      $elements.forEach((el) => {
        el.classList.remove("navbar-active");
      });

      for (let i = 0; i < navBarList.length; i++) {
        if (e.target.href.indexOf(navBarList[i]) > 0) {
          e.target.classList.add("navbar-active");
          break;
        }
      }
    }
  });

  return (
    <div className="d-flex flex-column">
      <AuthProvider>
        <ApiProvider>
          <HashRouter>
            <Header />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Main
                    dataMovieSearch={dataMovieSearch}
                    setDataMovieSearch={setDataMovieSearch}
                  />
                }
              />
              <Route exact path="/peliculas" element={<Peliculas />} />
              <Route exact path="/cartelera" element={<Cartelera />} />
              <Route exact path="/noticias" element={<Noticias />} />
              <Route exact path="/series" element={<Series />} />
              <Route exact path="/login" element={<Login />} />
              {/* Rutas saliendo de Home */}
              <Route
                exact
                path="/peliculas-recomendadas"
                element={<PeliculasRecomendadas el={"Hola mundo"} />}
              />

              <Route
                exact
                path="/busqueda/:search"
                element={<SearchData data={dataMovieSearch} />}
              />
              {/* Fin Rutas saliendo de Home */}
              <Route exact path="/" element={<PrivateRoute />}>
                <Route exact path="/dashboard" element={<Dashboard />} />
              </Route>
              <Route exact path="*" element={<Error404 />} />
            </Routes>
            <Footer />
          </HashRouter>
          <ArrowUp />
        </ApiProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
