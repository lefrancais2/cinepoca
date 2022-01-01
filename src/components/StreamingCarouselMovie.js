import React, { useState } from 'react';
import StreamingCard from './StreamingCard';
import '../styles/main.css';
import "../styles/carousel-movies.css";

let initialStateRight = 33;
let initialStateLeft = 0;

const StreamingCarouselMovie = () => {
    const [btnRight, setBtnRight] = useState(initialStateRight);
    const [btnLeft, setBtnLeft] = useState(initialStateLeft);
    
    const handleButton = (e) => {
        
        let $elements = document.querySelector(".streaming-carousel .carousel .slides");
        $elements.classList.remove("carousel-image-0","carousel-image-33","carousel-image-66");
        
        if(e.target.dataset.direction === "left"){
            $elements.classList.add(`carousel-image-${btnLeft}`);
            if(btnLeft >= 33){
                setBtnLeft(btnLeft-33);
            }
            if(btnRight === 66){
                setBtnRight(btnRight-33);
            }
        }
        
        if(e.target.dataset.direction === "right"){
            let clase = `carousel-image-${btnRight}`;
            $elements.classList.add(clase);
            if(btnRight <= 33){
                setBtnRight(btnRight+33);
            }
            if(btnRight === 66){
                setBtnLeft(33);
            }
        }
    }

    return (
        <>
            <div className="streaming-carousel-btn">
                <button onClick={handleButton} className="btn-slider-left position-absolute">
                    <i className="fas fa-chevron-circle-left" data-direction="left" data-index="-33"></i>
                </button>
                <button onClick={handleButton} className="btn-slider-right position-absolute">
                    <i className="fas fa-chevron-circle-right" data-direction="right" data-index="0"></i>
                </button>
            </div>
            <div className="carousel">
                <ul className="slides">
                    <li className="slide">  
                        <StreamingCard title="PELICULAS" subtitle="EN AMAZON PRIME VIDEO"/>
                    </li>
                    <li className="slide">  
                        <StreamingCard title="PELICULAS" subtitle="EN NETFLIX"/>
                    </li>
                    <li className="slide">  
                        <StreamingCard title="PELICULAS" subtitle="EN HBO"/>
                    </li>
                    <li className="slide">  
                        <StreamingCard title="PELICULAS" subtitle="EN DISNEY+"/>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default StreamingCarouselMovie
