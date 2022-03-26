import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Author from './components/pages/author/Author';
import FavAuthor from './components/pages/favauthor/FavAuthor';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Navigate replace to="/authors" />} />
				<Route path="/authors" element={<Author />} />
				<Route path="/favauthors" element={<FavAuthor />} />
			</Routes>
		</Router>
	);
}

export default App;
