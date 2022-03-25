import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ReactPaginate from 'react-paginate';
import Posts from '../../Posts';
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr';

import Pagination from '../../pagination/Pagination';

import './Author.css';
function Author() {
	/* const [author, setAuthor] = useState([]);
	useEffect(() => {
		axios
			.get('https://api.quotable.io/authors?limit=10&skip=20')
			.then((res) => {
				setAuthor(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<>
			<div className="fav-content">
				<ul className="card">
					{author.map((item, index) => {
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
		</>
	); */
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(3);

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const res = await axios.get(
				'https://api.quotable.io/authors?limit=10&skip=20'
			);
			setPosts(res.data.results);
			setLoading(false);
		};

		fetchPosts();
	}, []);

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div className="author-content">
			<Posts posts={currentPosts} loading={loading} />

			<Pagination
				postsPerPage={postsPerPage}
				totalPosts={posts.length}
				paginate={paginate}
			/>
		</div>
	);
}

export default Author;
