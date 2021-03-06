import React from 'react';
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr';

import './Pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<div className="pagination">
			<ul className="ul-item">
				<GrCaretPrevious className="icon-item" />
				Page:
				{pageNumbers.map((number) => (
					<li
						key={number}
						style={{ display: 'inline-block', textDecoration: 'none' }}
					>
						<button onClick={() => paginate(number)}>{number}</button>
					</li>
				))}
				<GrCaretNext className="icon-item" />
			</ul>
		</div>
	);
};

export default Pagination;
