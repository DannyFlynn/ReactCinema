function MovieSearch({ movieSearch, movieSelected, goBack }) {

    const posterPath = "https://www.themoviedb.org/t/p/w440_and_h660_face/";

    return (
        <div className="movies-container">
            <div className="close-container">
                <button className="m-3 close" onClick={goBack}>X</button>
            </div>

            {movieSearch.map(movie => {
                let releaseDate = new Date(movie.release_date);
                let day = releaseDate.getUTCDate().toString().padStart(2, "0");
                let month = (releaseDate.getUTCMonth() + 1).toString().padStart(2, "0");
                let year = releaseDate.getUTCFullYear();
                let ukReleaseDate = day + "/" + month + "/" + year;

                return <div key={movie.id} className="movie-searched mb-5" onClick={() => movieSelected(movie)}>
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
            })}
        </div>
    )
}

export default MovieSearch