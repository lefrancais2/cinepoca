import React, { useEffect } from 'react';
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm';
import "@glidejs/glide/dist/css/glide.core.min.css";
import "../styles/carousel-movies.css";

const sliderConfiguration = {
    type: 'carousel',
    perView: 4,
    focusAt: 'center',
    autoplay: true,
    peek:{
        before: "20",
        after: "20"
    },
    breakpoints: {
        800: {
            perView: 2
        },
        480: {
            perView: 1
        }
    }
}

const ListMovies = ({title}) => {
    const slider = new Glide('.glide',sliderConfiguration);

    useEffect(() => {
        return () => slider.mount({ Controls, Breakpoints });
    }, [slider]);

    return (
        <>
            <h3 className='pt-4 pb-1 mb-5'>{title}</h3>

            <div className="glide position-relative bg-light">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {/* <li className="glide__slide">  
                            <div className="p-5 border border-dark">Contenido 1</div>
                        </li> */}
                        <li className="glide__slide">  
                            <article className="border border-dark">
                                <figure>
                                    <img src="https://placeimg.com/80/100/animals" alt="" />
                                </figure>
                                <figcaption>
                                    <p>Este es un ejemplo</p>
                                </figcaption>
                            </article>
                        </li>
                        <li className="glide__slide">
                            <article className="border border-dark">
                                <figure>
                                    <img src="https://placeimg.com/80/100/people" alt="" />
                                </figure>
                                <figcaption>
                                    <p>Este es un ejemplo</p>
                                </figcaption>
                            </article>
                        </li>
                        <li className="glide__slide">
                            <div className="p-5">Contenido 3</div>
                        </li>
                        <li className="glide__slide">
                            <div className="p-5">Contenido 4</div>
                        </li>
                        <li className="glide__slide">
                            <div className="p-5">Contenido 5</div>
                        </li>
                        <li className="glide__slide">
                            <div className="p-5">Contenido 6</div>
                        </li>
                        <li className="glide__slide">
                            <div className="p-5">Contenido 7</div>
                        </li>
                        <li className="glide__slide">
                            <div className="p-5">Contenido 8</div>
                        </li>
                        <li className="glide__slide">
                            <div className="p-5">Contenido 9</div>
                        </li>
                        <li className="glide__slide">
                            <div className="p-5">Contenido 10</div>
                        </li>
                    </ul>
                </div>
                <div className="glide__arrows" data-glide-el="controls">
                    <button className="glide__arrow glide__arrow--left top-0 start-0 position-absolute btn-movies" data-glide-dir="<">
                        <i className="fas fa-chevron-circle-left"></i>
                    </button>
                    <button className="glide__arrow glide__arrow--right top-0 end-0 position-absolute btn-movies" data-glide-dir=">">
                        <i className="fas fa-chevron-circle-right"></i>
                    </button>
                </div>
            </div>

        </>
    )
}

export default ListMovies;