import React from 'react'

const ListMovies = ({title}) => {

    return (
        <>
            <h3>{title}</h3>
            <div className="glider-contain">
                <div className="glider">
                    <div className='w-25 vh-25 border border-dark'>your content here</div>
                    <div className='w-25 vh-25 border border-dark'>your content here</div>
                    <div className='w-25 vh-25 border border-dark'>your content here</div>
                    <div className='w-25 vh-25 border border-dark'>your content here</div>
                </div>

                <button aria-label="Previous" className="glider-prev">«</button>
                <button aria-label="Next" className="glider-next">»</button>
                <div role="tablist" className="dots"></div>
            </div>
        </>
    )
}

export default ListMovies;