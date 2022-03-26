import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

const Posts = ({ posts, loading }) => {
	var arr = [];
	const click = (index) => {
		arr.push(posts[index]);
		console.log(arr);

		localStorage.setItem('items', JSON.stringify({ arr }));
	};

	if (loading) {
		return <h2>Loading...</h2>;
	}
	return (
		<div className="fav-content">
			<ul className="card">
				{posts.map((item, index) => {
					console.log(item._id);
					return (
						<li key={item._id}>
							<button onClick={() => click(index)}>Add Favt</button>
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
