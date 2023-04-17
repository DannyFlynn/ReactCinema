function SelectedMovie({ movie, closebtn }) {

    const posterPath = "https://www.themoviedb.org/t/p/w440_and_h660_face/";

    let releaseDate = new Date(movie.release_date);
    let day = releaseDate.getUTCDate().toString().padStart(2, "0");
    let month = (releaseDate.getUTCMonth() + 1).toString().padStart(2, "0");
    let year = releaseDate.getUTCFullYear();
    let ukReleaseDate = day + "/" + month + "/" + year;

    return (
        <div className="movie-selected-container  m-md-5">
            {movie.length !== 0 ? (
                <div className="movie-selected ">
                    <div className="close-container">
                        <button onClick={closebtn} className="m-2 close">
                            X
                        </button>
                    </div>
                    <div className="w-100 d-flex flex-column flex-md-row selected-info">
                        <div className="selected-poster-container">
                            <img className='selected-poster' src={posterPath + movie.poster_path} alt="pic" />
                        </div>
                        <div className="d-flex flex-column justify-content-around">
                            <div className="text-center">
                                <h6 className="p-2 text-decoration-underline">{movie.title}</h6>
                                <h6 className="p-1 text-decoration-underline">{ukReleaseDate}</h6>
                            </div>
                            <div className="m-2">
                                <p className="p-md-2">{movie.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : false}
        </div>
    )
}

export default SelectedMovie