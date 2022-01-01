import React, { useState } from 'react';
import StreamingCard from './StreamingCard';
import '../styles/main.css';
import "../styles/carousel-movies.css";

let initialStateRightSeries = 33;
let initialStateLeftSeries = 0;

const StreamingCarouselSeries = () => {
    const [btnRightSeries, setBtnRightSeries] = useState(initialStateRightSeries);
    const [btnLeftSeries, setBtnLeftSeries] = useState(initialStateLeftSeries);
    
    const handleButtonSeries = (e) => {
        
        let $elements = document.querySelector(".streaming-carousel-series .carousel-series .slides-series");
        $elements.classList.remove("carousel-image-series-0","carousel-image-series-33","carousel-image-series-66");
        
        if(e.target.dataset.direction === "left"){
            $elements.classList.add(`carousel-image-series-${btnLeftSeries}`);
            if(btnLeftSeries >= 33){
                setBtnLeftSeries(btnLeftSeries-33);
            }
            if(btnRightSeries === 66){
                setBtnRightSeries(btnRightSeries-33);
            }
        }
        
        if(e.target.dataset.direction === "right"){
            let clase = `carousel-image-series-${btnRightSeries}`;
            $elements.classList.add(clase);
            if(btnRightSeries <= 33){
                setBtnRightSeries(btnRightSeries+33);
            }
            if(btnRightSeries === 66){
                setBtnLeftSeries(33);
            }
        }
    }

    return (
        <>
            <div className="streaming-carousel-btn-series">
                <button onClick={handleButtonSeries} className="btn-slider-left-series position-absolute">
                    <i className="fas fa-chevron-circle-left" data-direction="left" data-index="-33"></i>
                </button>
                <button onClick={handleButtonSeries} className="btn-slider-right-series position-absolute">
                    <i className="fas fa-chevron-circle-right" data-direction="right" data-index="0"></i>
                </button>
            </div>
            <div className="carousel-series">
                <ul className="slides-series">
                    <li className="slide-series">  
                        <StreamingCard title="SERIES" subtitle="EN AMAZON PRIME VIDEO"/>
                    </li>
                    <li className="slide-series">  
                        <StreamingCard title="SERIES" subtitle="EN NETFLIX"/>
                    </li>
                    <li className="slide-series">  
                        <StreamingCard title="SERIES" subtitle="EN HBO"/>
                    </li>
                    <li className="slide-series">  
                        <StreamingCard title="SERIES" subtitle="EN DISNEY+"/>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default StreamingCarouselSeries
