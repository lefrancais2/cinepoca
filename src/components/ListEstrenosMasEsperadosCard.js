const ListEstrenosMasEsperadosCard = ({element}) => {
    let url = `https://youtube.com/watch=?`;
    return (
        <article className="estrenos-esperados-article border-bottom">
            <div className="estrenos-esperados-pelicula">
                <p><strong>{element.title}</strong></p>
                <small>{element.release_date}</small>
            </div>
            <div className="estrenos-esperados-cine">
                <span>en cine</span>
                <a href={url}><i className="far fa-play-circle"></i></a>
            </div>
        </article>
    );
}

export default ListEstrenosMasEsperadosCard
