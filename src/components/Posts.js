import React from 'react';
import Card from 'react-bootstrap/Card';

const Posts = ({ posts, loading }) => {
	if (loading) {
		return <h2>Loading...</h2>;
	}

	return (
		<div className="fav-content">
			<ul className="card">
				{posts.map((item, index) => {
					return (
						<li key={index}>
							<Card style={{ width: '18rem' }}>
								<button>Add Favt</button>
								<Card.Body>
									<Card.Title>Name: {item.name}</Card.Title>
									<Card.Text>Bio: {item.bio}</Card.Text>
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
