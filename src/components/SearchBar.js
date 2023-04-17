import { FiSearch } from 'react-icons/fi';

function SearchBar({ searchTerm, searchMovie, handleSearchChange }) {

    return (
        <div className="search-container">
            <input
                className="search-input"
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search Movies..."
            />
            <button className="search-button"
                onClick={() => searchMovie(searchTerm)} >
                <FiSearch className="search-icon" />
            </button>
        </div>
    );





}

export default SearchBar;

