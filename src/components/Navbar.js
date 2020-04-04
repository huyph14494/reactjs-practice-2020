import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import routes from 'src/routers/routers';

function showMenu(location) {
	return routes.map((value, key) => (
		<li className={"nav-item ml-3" + (location.pathname === value.path ? " active" : "")} key={key}>
			<Link className="nav-link" to={value.path}>
				{value.name}
			</Link>
		</li>
	));
}

function Navbar(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<span className="navbar-brand toggleSidebar cursor-pointer">Menu</span>

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
					{/* <li className="nav-item active ml-3">
						<Link className="nav-link" to="/">
							Home
						</Link>
					</li> */}
					{showMenu(props.location)}
				</ul>
			</div>
		</nav>
	);
}

export default withRouter(Navbar);
