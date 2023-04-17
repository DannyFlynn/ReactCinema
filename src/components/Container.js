import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

import { apiKey } from './Private';

import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import Saying from './Saying';
import Pagination from './Pagination';
import MainContent from './MainContent';

import SelectedMovie from './SelectedMovie';
import MovieSearch from './MovieSearch';



function Container() {

    //movie data
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [movieList, setMovieList] = useState(true);
    const movieListRef = useRef(null);

    //navigation links user click it will make an api call example its (defaulted to top_rated user can chnage to most popular)
    const [topic, setTopic] = useState("popular");
    const [movieMenu, setMovieMenu] = useState(false);
    //use effect
    const [update, setUpdate] = useState(false);

    //pagination
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState({ pageA: 1, pageB: 2, pageC: 3, pageD: 4, pageE: 100 })

    //SearchBar
    const [searchTerm, setSearchTerm] = useState('');

    //movie selected
    const [movie, setMovie] = useState([]);
    const [close, setClose] = useState(false);

    //movie searched
    const [movieSearch, setMovieSearch] = useState([]);
    const [movieFound, setMovieFound] = useState(false);


    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/${topic}?api_key=${apiKey}&page=${page}`).then
            ((response) => {

                setData(response.data.results)
                setLoading(false);
            }).catch((error) => {
                console.log(error)
            })
    }, [update]);

    //nav menu
    const menuOpen = () => {

        setMovieMenu(!movieMenu);

    }

    //nav select/option logic
    const movieTopic = (option) => {
        setMovieMenu(false)

        switch (option) {
            case "popular":
                setTopic(option);
                setPage(1);
                setPages({ pageA: 1, pageB: 2, pageC: 3, pageD: 4, pageE: 100 });
                setUpdate(!update);
                movieListRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                break;

            case "top_rated":
                setTopic(option);
                setPage(1);
                setPages({ pageA: 1, pageB: 2, pageC: 3, pageD: 4, pageE: 100 });
                setUpdate(!update);
                movieListRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                break;

            case "upcoming":
                setTopic(option);
                setPage(1);
                setPages({ pageA: 1, pageB: 2, pageC: 3, pageD: 4, pageE: 100 });
                setUpdate(!update);
                movieListRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                break;

            default:
                break;

        }

    }

    //search logic
    const searchMovie = (searched) => {

        setSearchTerm("");
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${searched}&api_key=${apiKey}`).then
            ((response) => {

                setMovieSearch(response.data.results);
                setMovieList(false);
                setMovieMenu(false);
                setMovieFound(true);
            })


    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    //movie order title(a/z) and year logic all in switch statement gets invoked from FilterSelection.js
    const filterSelection = (selected) => {
        switch (selected) {
            case "Title(A/Z) Ascending":
                setData(prevMovies => {
                    let copyData = prevMovies.slice().sort((a, b) => a.title.localeCompare(b.title))
                    return copyData;
                })
                break;

            case "Title(A/Z) Descending":
                setData(prevMovies => {
                    let copyData = prevMovies.slice().sort((a, b) => b.title.localeCompare(a.title))
                    return copyData;
                })
                break;

            case "Release Date Ascending":
                setData(prevMovies => {
                    let copyData = prevMovies.slice().sort((a, b) => a.release_date.localeCompare(b.release_date))
                    return copyData;
                })
                break;

            case "Release Date Descending":
                setData(prevMovies => {
                    let copyData = prevMovies.slice().sort((a, b) => b.release_date.localeCompare(a.release_date))
                    return copyData;
                })
                break;

            default:
                break;
        }

    }

    //when a movie gets selected
    const movieSelected = (choice) => {

        setClose(true);
        setMovie(choice)
        setMovieMenu(false);
        setMovieList(false);
        setMovieFound(false);

    }

    const closebtn = () => {

        setMovieList(true);
        setClose(false);
        setMovieFound(false);

    }

    const goBack = () => {

        setMovieFound(false);
        setMovieList(true);
        setClose(false);

    }

    //page changer goes up to 200 pages all logic in switch statement and invoked in Pagination.js
    const pageChoice = (newPage, pageId) => {
        switch (pageId) {
            case 'A':

                setPages(prev => ({ ...prev, pageB: 2, pageC: 3, pageD: 4 }))
                setPage(newPage)
                setUpdate(!update);
                break;
            case 'B':

                setPages(prev => pages.pageB !== 2 ? ({ ...prev, pageB: pages.pageB - 1, pageC: pages.pageB, pageD: pages.pageD - 1 }) : { ...prev })
                setPage(newPage)
                setUpdate(!update);
                break;
            case 'C':

                setPages(pages)
                setPage(newPage)
                setUpdate(!update);
                break;
            case 'D':

                setPages(prev => pages.pageD !== 199 ? ({ ...prev, pageB: pages.pageC, pageC: pages.pageD, pageD: pages.pageD + 1 }) : ({ ...prev }))
                setPage(newPage)
                setUpdate(!update);
                break;
            case 'E':

                setPages(prev => ({ ...prev, pageB: pages.pageE - 3, pageC: pages.pageE - 2, pageD: pages.pageE - 1 }))
                setPage(newPage)
                setUpdate(!update);
                break;

            default:
                break;
        }
    }



    return (

        <div className='movie-wrapper'>
            <Navigation movieTopic={movieTopic} movieMenu={movieMenu} menuOpen={menuOpen} movieList={movieList} />
            {movieList === true ?
                <div>
                    <Saying />
                    <SearchBar searchTerm={searchTerm} searchMovie={searchMovie} handleSearchChange={handleSearchChange} />
                    <MainContent movieListRef={movieListRef} filterSelection={filterSelection} loading={loading} data={data} movieSelected={movieSelected} topic={topic} />
                    <Pagination page={page} pageChoice={pageChoice} pages={pages} topic={topic} />
                </div>
                : false}
            {close === true ? <SelectedMovie movie={movie} closebtn={closebtn} /> : false}
            {movieFound === true ? <MovieSearch movieSearch={movieSearch} movieSelected={movieSelected} goBack={goBack} /> : false}
        </div>

    )
}

export default Container