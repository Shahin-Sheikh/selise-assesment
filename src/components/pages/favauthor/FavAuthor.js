import React, { useState, useEffect } from 'react';
import './FavAuthor.css';
import Card from 'react-bootstrap/Card';
function FavAuthor() {
	const [data, setItems] = useState([]);
	useEffect(() => {
		var localStorageItems = JSON.parse(localStorage.getItem('items'));
		console.log(localStorageItems);
		if (localStorageItems) {
			setItems(localStorageItems.arr);
		} else {
			setItems([]);
		}
	}, []);

	const handleClick = (index) => {
		data.splice(index, 1);
		console.log(data);
		localStorage.setItem('items', JSON.stringify({ arr: data }));
		window.location.reload(false);
	};

	return (
		<>
			<div className="fav-content">
				<ul className="card">
					{data.map((item, index) => {
						return (
							<li key={item.id}>
								<button onClick={() => handleClick(index)}>Remove Favt</button>
								<Card style={{ width: '18rem' }}>
									<Card.Body>
										<Card.Title>Name: {index}</Card.Title>
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
