const ListMoviesCard = ({data}) => {
    return (
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
    )
}

export default ListMoviesCard
