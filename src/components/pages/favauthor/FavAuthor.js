import React, { useState, useEffect } from 'react';
import './FavAuthor.css';
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
					{data.length > 0 ? (
						data.map((item, index) => {
							return (
								<li key={item.id}>
									<button onClick={() => handleClick(index)}>
										Remove Favt
									</button>
									<div className="post">
										<h1>{item.name}</h1>
										<p>{item.bio}</p>
										<a href={item.link}>{item.link}</a>
									</div>
								</li>
							);
						})
					) : (
						<p>No item </p>
					)}
				</ul>
			</div>
		</>
	);
}

export default FavAuthor;
