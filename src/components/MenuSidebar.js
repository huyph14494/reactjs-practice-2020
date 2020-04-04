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

						<Link to="/reactjs_redux_example">Home</Link>
					</li>
					<li>
						<Link to="/reactjs_redux_example/sign-in">Sign-in</Link>
					</li>
				</ul>
				<ul className="list-unstyled CTAs">
					<li>
						<a href="/" className="download">
							Download source
						</a>
					</li>
					<li>
						<a href="/" className="article">
							Back to article
						</a>
					</li>
				</ul>
			</nav>

			<button type="button" id="sidebarCollapse" className="btn btn-info">
				<i className="fas fa-align-left" />
				<span>Toggle Sidebar</span>
			</button>
		</div>
	);
}

export default MenuSidebar;
