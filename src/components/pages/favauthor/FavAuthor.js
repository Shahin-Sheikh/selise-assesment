import React, { useState, useEffect } from 'react';
import './FavAuthor.css';
import Card from 'react-bootstrap/Card';
function FavAuthor() {
	const [data, setItems] = useState([]);
	useEffect(() => {
		const localStorageItems = JSON.parse(localStorage.getItem('items'));
		console.log(localStorageItems);
		if (localStorageItems) {
			setItems(localStorageItems);
		} else {
			setItems([]);
		}
	}, []);
	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(data));
	}, [data]);

	return (
		<>
			<div className="fav-content">
				<ul className="card">
					<li key={data.id}>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>Name: {data.name}</Card.Title>
								<Card.Text>Bio: {data.bio}</Card.Text>
								<Card.Text>Link: {data.link}</Card.Text>
							</Card.Body>
						</Card>
					</li>
				</ul>
			</div>
		</>
	);
}

export default FavAuthor;
