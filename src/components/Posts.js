import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

const Posts = ({ posts, loading }) => {
	const click = () => {
		//setButtonText(text);
		localStorage.setItem('items', JSON.stringify(posts));
	};
	if (loading) {
		return <h2>Loading...</h2>;
	}
	return (
		<div className="fav-content">
			<ul className="card">
				{posts.map((item, index) => {
					return (
						<li key={index}>
							<button onClick={() => click()}>Add Favt</button>
							<Card style={{ width: '18rem' }}>
								<Card.Body>
									<Card.Title>Name: {item.name}</Card.Title>
									<Card.Text>Bio: {item.bio}</Card.Text>
									<Card.Text>Link: {item.link}</Card.Text>
								</Card.Body>
							</Card>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Posts;
