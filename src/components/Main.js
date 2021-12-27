import Carousel from "./Carousel";
import "../styles/main.css";
import ListMovies from "./ListMovies";

const Main = () => {
    return (
        <main className="flex-grow-1 bg-white bg-lg-light">
            {/* Inicio Titulo Pagina */}
            <section className="title-page d-flex flex-row align-items-center justify-content-center">
                <aside>
                    <h1 className="fw-bold">CINEPOCA</h1>
                </aside>
            </section>
            {/* Fin Titulo Pagina */}

            {/* Inicio Carousel */}
            <section>
                <Carousel/>
            </section>
            {/* Fin Carousel */}

            <section className="bg-white title-cine d-flex flex-column align-items-center justify-content-evenly">
                <aside className="align-content-content">
                    <h2>CINE</h2>
                </aside>
                <aside className="border-top w-100 text-center pt-2">
                    <a href="#sad" className="text-decoration-none">
                        <span className="text-warning">#</span>Películas recomendadas
                    </a>
                </aside>
            </section>

            {/* Inicio Buscar peliculas */}
            <section className="d-flex flex-column align-items-right justify-content-center movie-search p-3 mx-2">
                <aside>
                    <form>
                        <input type="search" name="search" className="w-100 border border-light p-2" placeholder="Introduce un titulo ó el año de la película"/>
                    </form>
                </aside>
                <aside>
                    <a href="#a" className="text-decoration-none">Inicia sesión para buscar tus peliculas favoritas</a>
                </aside>
            </section>
            {/* Fin Buscar peliculas */}

            {/* Inicio Estrenos */}
            <section className="mt-4">
                <ListMovies title="ESTRENOS DE ESTA SEMANA"/>
            </section>
            {/* Fin Estrenos */}

            {/* Inicio Cartelera */}
            <section>

            </section>
            {/* Fin Cartelera */}
        </main>
    )
}

export default Main
