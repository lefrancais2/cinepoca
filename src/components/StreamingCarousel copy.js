import React, { useEffect } from 'react';
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm';
import "@glidejs/glide/dist/css/glide.core.min.css";
import "../styles/carousel-movies.css";
import StreamingCard from './StreamingCard';

const sliderConfiguration = {
    type: 'carousel',
    perView: 2,
    focusAt: 'left',
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

const StreamingCarousel = () => {
    const slider = new Glide('.glide',sliderConfiguration);

    useEffect(() => {
        return () => slider.mount({ Controls, Breakpoints });
    }, [slider]);

    return (
        <div className="glide position-relative bg-light">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        <li className="glide__slide">  
                            <StreamingCard title="EN AMAZON PRIME VIDEO"/>
                        </li>
                        <li className="glide__slide">  
                            <StreamingCard title="EN NETFLIX"/>
                        </li>
                        <li className="glide__slide">  
                            <StreamingCard title="EN HBO"/>
                        </li>
                        <li className="glide__slide">  
                            <StreamingCard title="EN DISNEY+"/>
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
    )
}

export default StreamingCarousel
