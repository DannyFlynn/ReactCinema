function Pagination({ page, pageChoice, pages, topic }) {

    return (
        <div className='pagination-container'>
            {topic !== 'upcoming' ? (
                <div className="pagination">
                    <button className={pages.pageA === page ? "selected-page-btn" : "page-btn"} onClick={() => pageChoice(pages.pageA, 'A')}>{pages.pageA}</button>
                    <button className={pages.pageB === page ? "selected-page-btn" : "page-btn"} onClick={() => pageChoice(pages.pageB, 'B')}>{pages.pageB}</button>
                    <button className={pages.pageC === page ? "selected-page-btn" : "page-btn"} onClick={() => pageChoice(pages.pageC, 'C')}>{pages.pageC}</button>
                    <button className={pages.pageD === page ? "selected-page-btn" : "page-btn"} onClick={() => pageChoice(pages.pageD, 'D')}>{pages.pageD}</button>
                    <button className={pages.pageE === page ? "selected-page-btn" : "page-btn"} onClick={() => pageChoice(pages.pageE, 'E')}>{pages.pageE}</button>
                </div>
            ) : null}
        </div>
    )
}

export default Pagination