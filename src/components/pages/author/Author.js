import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Posts from '../../listitem/Listitem';
import Pagination from '../../pagination/Pagination';
import './Author.css';

function Author() {
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

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

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
