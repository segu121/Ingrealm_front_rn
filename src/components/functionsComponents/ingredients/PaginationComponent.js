import React from "react";
import "./ingredientList.css"

const PaginationComponent = ({ ingredientsPerPage, totalIngredients, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalIngredients / ingredientsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination justify-content-center container">
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