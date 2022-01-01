const NewsCard = ({element}) => {
    
    const shortTitle = (element) => {
        if(element.title.length > 60){
            let chars = element.title.slice(0,60);
            chars += "...";
            return chars;
        }else{
            return element.title;
        }
    }
    let title = shortTitle(element);

    return (
        <article className="d-flex flex-row justify-content-start">
            <figure className="img-news-thumb-block">
                <div>
                    {/* <img src="https://placeimg.com/240/135/nature" alt="" /> */}
                    <img src={element.urlToImage} alt="" width="240" height="135" style={{objectFit:"cover"}}/>
                </div>
            </figure>
            <div className="block-info-movie-news">
                <div className="news-info">
                    <h5 className="text-warning">NOTICIAS</h5>
                </div>
                <div className="link-title-news">
                    <a href={element.url} target="_blank" rel="noopener">
                        {title}
                    </a>
                </div>
            </div>
        </article>

        // <article className="d-flex flex-row justify-content-start">
        //     <figure className="img-news-thumb-block">
        //         <div>
        //             <img src="https://placeimg.com/240/135/nature" alt="" />
        //         </div>
        //     </figure>
        //     <div className="block-info-movie-news">
        //         <div className="news-info">
        //             <h5 className="text-warning">NOTICIAS</h5>
        //         </div>
        //         <div className="link-title-news">
        //             <a href="#dasd">
        //                 'Titulares de noticias': Netflix, HBO, Amazon Prime Video, Disney+
        //             </a>
        //         </div>
        //     </div>
        // </article>
    )
}

export default NewsCard
