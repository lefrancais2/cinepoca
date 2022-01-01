import '../styles/main.css';

const StreamingCard = ({title,subtitle}) => {
    return (
        <a className="streaming-card text-decoration-none" href="#ads">
            <figure className="d-flex flex-row flex-wrap align-items-start justify-content-start">
                <img src="https://placeimg.com/80/220/animals" alt="" />
                <img src="https://placeimg.com/80/220/people" alt="" />
                <img src="https://placeimg.com/80/220/arch" alt="" />
                <img src="https://placeimg.com/80/220/nature" alt="" />
            </figure>
            <figcaption className="layer">
                <div>
                    <p>LAS MEJORES {title} <br/>
                        <strong>{subtitle}</strong>
                    </p>
                </div>
            </figcaption>
        </a>
    )
}

export default StreamingCard
