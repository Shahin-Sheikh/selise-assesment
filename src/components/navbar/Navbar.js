import React from 'react';
import { Link } from 'react-router-dom';
import { NavContent } from './NavContent';
import './Navbar.css';

function Navbar() {
	return (
		<>
			<div className="nav-content">
				<nav className="nav-menu">
					<ul className="nav-menu-items">
						{NavContent.map((item, index) => {
							return (
								<li key={index}>
									<Link to={item.path} style={{ textDecoration: 'none' }}>
										{item.title}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</>
	);
}

export default Navbar;
