import { useState } from "react"

function FilterSelection({ filterSelection, topic }) {

    //what ever option that is selected will be stored in selected
    const [selected, setSelected] = useState('')

    return (
        <div className="filter-selection-container">
            <div className="card w-100 h-100 m-1">
                <div className="card-header text-decoration-underline">
                    {topic[0].toUpperCase()}{topic.slice(1)}
                </div>
                <div className="card-body">
                    <h5 className="card-title m-2 d-none d-md-block">Filter</h5>
                    <select className="mt-4  mobile-filter" value={selected} onChange={(e) => setSelected(e.target.value)} >
                        <option>Select....</option>
                        <option value="Title(A/Z) Ascending">Title(A/Z) Ascending</option>
                        <option value="Title(A/Z) Descending">Title(A/Z) Descending</option>
                        <option value="Release Date Ascending">Release Date Ascending</option>
                        <option value="Release Date Descending">Release Date Descending</option>
                    </select>
                </div>
                <div className="filter-btn-container">
                    <button className="filter-btn" onClick={() => filterSelection(selected)}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default FilterSelection