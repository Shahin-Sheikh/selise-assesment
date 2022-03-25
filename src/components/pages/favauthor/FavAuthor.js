import React, { useState, useEffect } from 'react';
import './FavAuthor.css';
import Card from 'react-bootstrap/Card';
function FavAuthor() {
	const [data, setItems] = useState([]);
	useEffect(() => {
		var localStorageItems = JSON.parse(localStorage.getItem('items'));
		console.log(localStorageItems);
		localStorageItems.newRow.shift();
		if (localStorageItems) {
			setItems(localStorageItems.newRow);
		} else {
			setItems([]);
		}
	}, []);

	return (
		<>
			<div className="fav-content">
				<ul className="card">
					{data.map((item, index) => {
						return (
							<li key={item.id}>
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
		</>
	);
}

export default FavAuthor;
