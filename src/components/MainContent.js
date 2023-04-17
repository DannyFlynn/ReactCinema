import FilterSelection from "./FilterSelection";
import Movies from "./Movies";

function MainContent({ movieListRef, filterSelection, loading, data, movieSelected, topic }) {
    return (
        <div className="main-content">
            <FilterSelection filterSelection={filterSelection} topic={topic} />
            <Movies loading={loading} data={data} movieSelected={movieSelected} movieListRef={movieListRef} />
        </div>
    )
}

export default MainContent