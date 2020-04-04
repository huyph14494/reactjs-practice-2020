import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function MenuSidebar(props) {
	return (
		<div>
			{/* Sidebar  */}
			<nav id="sidebar" className="text-left">
				<div id="dismiss">
					<FontAwesomeIcon icon={faArrowLeft} />
				</div>
				<div className="sidebar-header">
					<h3>Bootstrap Sidebar</h3>
				</div>
				<ul className="list-unstyled components">
					<div className="mb-4 pl-3">
						<h5>Dummy Heading</h5>
					</div>
					<li className="active">
						{/* <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
							Home
						</a>
						<ul className="collapse list-unstyled" id="homeSubmenu">
							<li>
								<a href="/">Home 1</a>
							</li>
							<li>
								<a href="/">Home 2</a>
							</li>
							<li>
								<a href="/">Home 3</a>
							</li>
						</ul> */}

						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/sign-in">Sign-in</Link>
					</li>
				</ul>
				<ul className="list-unstyled CTAs">
					<li>
						<Link to="/" className="download">
							Download source
						</Link>
					</li>
					<li>
						<Link to="/" className="article">
							Back to article
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default MenuSidebar;
