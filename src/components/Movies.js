const posterPath = "https://www.themoviedb.org/t/p/w440_and_h660_face/"

function Movies({ loading, data, movieSelected, movieListRef }) {

    return (
        <div className='movies-container' ref={movieListRef}>{loading === false ? data.map(movie => {

            let releaseDate = new Date(movie.release_date);
            let day = releaseDate.getUTCDate().toString().padStart(2, "0");
            let month = (releaseDate.getUTCMonth() + 1).toString().padStart(2, "0");
            let year = releaseDate.getUTCFullYear();
            let ukReleaseDate = day + "/" + month + "/" + year;

            return <div key={movie.id} className="movies" onClick={() => movieSelected(movie)}>
                <div className='banner'>
                    <img className='poster' src={posterPath + movie.poster_path} alt="pic" />
                </div>
                <div className='text-center m-3'>
                    <h6>{movie.title}</h6>
                </div>
                <div className='text-center m-2'>
                    {ukReleaseDate}
                </div>
                <div className='text-center m-3'>
                    Rating: {movie.vote_average}/10
                </div>

            </div>
        }) : null}</div>
    )
}

export default Movies