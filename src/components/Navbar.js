import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<span className="navbar-brand toggleSidebar cursor-pointer">Navbar</span>

			<button
				className="navbar-toggler toggleSidebar"
				type="button"
				// data-toggle="collapse"
				// data-target="#navbarSupportedContent"
				// aria-controls="navbarSupportedContent"
				// aria-expanded="false"
				// aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active ml-3">
						<Link className="nav-link" to="/">
							Home
						</Link>
					</li>
					<li className="nav-item ml-3">
						<Link className="nav-link" to="/sign-in">
							Sign-in
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
