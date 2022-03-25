import React, { useState } from 'react';
import './Pagination.css';
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div className="pagination">
			<ul className="ul-item">
				<GrCaretPrevious />
				Page:
				{pageNumbers.map((number) => (
					<li
						key={number}
						style={{ display: 'inline-block', textDecoration: 'none' }}
					>
						<a onClick={() => paginate(number)} href="#" className="page-link">
							{number}
						</a>
					</li>
				))}
				{<GrCaretNext />}
			</ul>
		</div>
	);
};

export default Pagination;
