import React from 'react';
import 'src/css/Logo.scss';

function Header(props) {
	console.log('Header');

	return (
		<div className="jumbotron m-b-1rem jumbotron-padding-custom">
			<div className="container-logo-parent">
				<div className="container-logo-son">
					<section className="logo-react">
						<div />
						<div />
						<div />
						<div />
					</section>
				</div>
			</div>

			<p className="lead display-4 mt-4">Jumbo heading</p>
		</div>
	);
}

export default Header;
