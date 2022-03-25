import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

const Posts = ({ posts, loading }) => {
	const click = (id, name, bio, link) => {
		//setButtonText(text);
		const obj = {
			id: id,
			name: name,
			bio: bio,
			link: link,
		};
		localStorage.setItem('items', JSON.stringify({ ...obj }));
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
							<button
								onClick={() => click(item._id, item.name, item.bio, item.link)}
							>
								Add Favt
							</button>
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
