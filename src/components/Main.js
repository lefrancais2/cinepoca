import { helpHttp } from "../helpers/helpHttp";
import { useEffect,useState } from "react";
import Carousel from "./Carousel";
import ListMovies from "./ListMovies";
import ListEstrenosMasEsperados from "./ListEstrenosMasEsperados";
import StreamingCarouselMovie from "./StreamingCarouselMovie";
import StreamingCarouselSeries from "./StreamingCarouselSeries";
import cinta from '../assets/cinta_orange.svg';
import News from "./News";
import "../styles/main.css";
import "../styles/all-page.css";

// db news de prueba hecho en objetos
import {dbNewsMovie,dbNewsSeries} from "../api/dbNews";
// db news de prueba hecho en objetos

const Main = () => {
    let tokenNews = "22e0325d46b74ecaa518a4ab9e8d661f",
    urlNewsMovie = `https://newsapi.org/v2/everything?q=movie&apiKey=${tokenNews}`,
    urlNewsSeries = `https://newsapi.org/v2/everything?q=tv-show&apiKey=${tokenNews}`,
    urlMovieStreaming = `https://streaming-availability.p.rapidapi.com/search/basic`;

    


    const [dataNewsMovie, setDataNewsMovie] = useState(null);
    const [dataNewsSerie, setDataNewsSerie] = useState(null);
    const [loading, setLoading] = useState(false);

    const valor = false;

    let urlFakeApi = "http://localhost:5000/articles";
    useEffect(() => {
        setLoading(true);
        //helpHttp().get(urlNewsMovie)
        helpHttp().get(urlFakeApi)
        .then(res => {
            setDataNewsMovie(res);
            setLoading(false);
        });
    }, [urlFakeApi]);

    useEffect(() => {
        setLoading(true);
        //helpHttp().get(urlNewsSeries)
        helpHttp().get(urlFakeApi)
        .then(res => {
            setDataNewsSerie(res);
            setLoading(false);
        });
    }, [urlFakeApi]);

    return (
        <main className="flex-grow-1 bg-white bg-md-light container-page">
            {/* Inicio Titulo Pagina */}
            <section className="title-page d-flex flex-row bg-light align-items-center justify-content-center">
                <aside>
                    <h1 className="fw-bold">
                        {/* <img src={filmadora} className="d-none d-md-inline-block" width="80" height="80" alt="" /> */}
                        <img src={cinta} className="d-none d-md-inline-block" width="80" height="80" alt="" />
                        CINEPOCA
                    </h1>
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
            <section className="movie-search">
                <aside>
                    <form>
                        <input type="search" name="search" className="w-100 border border-light p-2 text-dark" placeholder="Introduce un titulo ó el año de la película"/>
                    </form>
                </aside>
                <aside>
                    <a href="#a" className="text-decoration-none">Inicia sesión para buscar tus peliculas favoritas</a>
                </aside>
            </section>
            {/* Fin Buscar peliculas */}

            {/* Inicio Estrenos de esta semana */}
            <section className="mt-4 w-100">
                <ListMovies title="ESTRENOS DE ESTA SEMANA"/>
            </section>
            {/* Fin Estrenos */}

            {/* Inicio Cartelera */}
            <section className="mt-4 w-100">
                <ListMovies title="CARTELERA"/>
            </section>
            {/* Fin Cartelera */}

            {/* Inicio Los Estrenos mas esperados */}
            <section className="mt-5 w-100">
                <ListEstrenosMasEsperados/>
            </section>
            {/* Fin Los Estrenos mas esperados */}

            {/* Inicio Noticias de Peliculas */}
            <section className="mt-5 w-100">
                {/* <News title="CINE" data={dataNewsMovie} loading={loading}/> */}
                {/* Inicio Solo prueba */}
                <News title="CINE" data={dbNewsMovie} loading={valor}/>
                {/* Fin Solo prueba */}
            </section>
            {/* Fin Noticias de Peliculas */}


            {/* STREAMING */}
            <section className="mt-5 mb-5 w-100">
                <aside className="title-streaming title-streaming-top">
                    <h2>STREAMING</h2>
                </aside>
                <div className="d-flex flex-row justify-content-evenly align-items-center border-top border-bottom p-3">
                    <div>
                        <a href="#s" className="text-decoration-none text-dark fw-bold"><span className="text-warning">#</span><span className="streaming-subtitle">Amazon Prime Video</span></a>
                    </div>
                    <div>
                        <a href="#s" className="text-decoration-none text-dark fw-bold"><span className="text-warning">#</span><span className="streaming-subtitle">HBO Max</span></a>
                    </div>
                    <div>
                        <a href="#s" className="text-decoration-none text-dark fw-bold"><span className="text-warning">#</span><span className="streaming-subtitle">Netflix</span></a>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="d-flex flex-row flex-wrap justify-content-start align-items-center streaming-carousel">
                        {/* <StreamingCard title="EN HBO MAX"/> */}
                        <StreamingCarouselMovie/>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="d-flex flex-row flex-wrap justify-content-start align-items-center streaming-carousel-series">
                        {/* <StreamingCard title="EN HBO MAX"/> */}
                        <StreamingCarouselSeries/>
                    </div>
                </div>
            </section>
            {/* Fin STREAMING */}


            {/* Inicio Noticias de Series */}
            <section className="mt-5 w-100">
                {/* <News title="SERIES" data={dataNewsSerie} loading={valor}/> */}
                {/* Inicio Solo prueba */}
                <News title="SERIES" data={dbNewsSeries} loading={valor}/>
                {/* Fin Solo prueba */}
            </section>
            {/* Fin Noticias de Series */}

        </main>
    )
}

export default Main
