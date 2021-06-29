import React from 'react';
import { Link } from "react-router-dom";

import './pagination.scss';

const Pagination = ({ pages, changePage }) => {
  let paginationPages = []

  for (let i = 1; i < pages - 494; i++) {
    paginationPages.push(i)
  }

  return (
    <ul className="pagination">
      {paginationPages.map(page => {
        return (
          <li key={page} className="pagination__item">
            <Link className="pagination__link" to={`/home/${page}`} onClick={() => changePage(page)}>{page}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Pagination;
