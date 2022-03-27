import React, { useState } from 'react';

const Listitem = ({ posts }) => {
	const [isFavorite, setIsFavorite] = useState({});
	const handleClick = (e) => {
		const id = e.target.id;
		setIsFavorite((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
		localStorage.setItem(
			'items',
			JSON.stringify(
				posts.filter(
					({ _id }) => _id === id || ([_id] in isFavorite && isFavorite[_id])
				)
			)
		);
	};

	return (
		<div className="fav-content">
			<ul className="card">
				{posts.map((item) => (
					<li key={item._id}>
						<button id={item._id} onClick={handleClick}>
							{isFavorite[item._id] ? 'Remove Fav' : 'Add Fav'}
						</button>
						<div className="post">
							<h4>Name: {item.name}</h4>
							<p>Bio: {item.bio}</p>
							<a href={item.link}>Link: {item.link}</a>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Listitem;
