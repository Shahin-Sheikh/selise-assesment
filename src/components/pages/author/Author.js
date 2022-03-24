import React from 'react';
import './Author.css';
function Author() {
	return (
		<div className="author-content">
			<div className="title">
				<h1>Author</h1>
			</div>
			<div className="author-info">
				<div className="author-img">
					<img
						src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
						alt="author"
					/>
				</div>
				<div className="author-info-text">
					<h2>Author Name</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque\ euismod, urna eu tincidunt consectetur, nisi nisl
						aliquam eros, eget\
					</p>
				</div>
			</div>
		</div>
	);
}

export default Author;
