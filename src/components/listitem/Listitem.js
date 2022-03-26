import React from 'react';

const Listitem = ({ posts }) => {
	var arr = [];
	const click = (index) => {
		arr.push(posts[index]);
		console.log(arr);
		localStorage.setItem('items', JSON.stringify({ arr }));
	};
	return (
		<div className="fav-content">
			<ul className="card">
				{posts.map((item, index) => {
					console.log(item._id);
					return (
						<li key={item._id}>
							<button onClick={() => click(index)}>Add Favt</button>
							<div className="post">
								<h1>Name: {item.name}</h1>
								<p>Bio: {item.bio}</p>
								<a href={item.link}>Link: {item.link}</a>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Listitem;
