function Navigation({ movieTopic, movieMenu, menuOpen, movieList }) {

    return (

        <div className='nav'>
            <div className='title-container'>
                <h4>
                    MovieBuff
                </h4>
            </div>
            {movieList === true ? <div className="nav-select-container text-end">
                <p className="m-2 text-decoration-underline nav-btn" onClick={menuOpen} >Movies</p>
                {movieMenu === true ?
                    <ul className="nav-menu-show">
                        <li onClick={() => movieTopic('popular')} >Popular</li>
                        <li onClick={() => movieTopic('upcoming')}>Upcoming</li>
                        <li onClick={() => movieTopic('top_rated')}>Top Rated</li>
                    </ul>
                    : false}
            </div>
                : false}
        </div>

    );
};

export default Navigation