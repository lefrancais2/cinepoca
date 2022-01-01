import "../styles/all-page.css";

const ArrowUp = () => {

    window.addEventListener("scroll",e => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if(scrollTop > 600){
            document.querySelector(".up-arrow").classList.remove("hidden");
        }else{
            document.querySelector(".up-arrow").classList.add("hidden");
        }
    });

    const handleButtonUp = (e) => {
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
    }

    return (
        // <div className='up-arrow'>
        <>
            <button className='up-arrow hidden' onClick={handleButtonUp}>
                <i className="fas fa-chevron-up"></i>
            </button>
        </>
    )
}

export default ArrowUp;
