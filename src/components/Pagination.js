import React, {useState} from 'react'

const Pagination = ({bikesPerPage, totalBikes, paginate}) => {

    const [currentPage, setCurrentPage] = useState(1)
    const pageNumbers = [];

    for(let i=1; i <= Math.ceil(totalBikes / bikesPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="!#">Previous</a></li>
                {pageNumbers.map((number) => (
                    <li className={number === currentPage ? "page-item active" : "page-item"} key={number}> 
                        <a onClick={() => {paginate(number) 
                            setCurrentPage(number)}} className="page-link" href="!#"> {number} </a>
                    </li>
                ))}
                <li className="page-item"><a className="page-link" href="!#">Next</a></li>
            </ul>
        </div>

    )
}

export default Pagination
