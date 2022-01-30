import React from "react";

const PaginationComponent = ({ ingredientsPerPage, totalIngredients, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalIngredients / ingredientsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination justify-content-center">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="#ingredients" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default PaginationComponent;