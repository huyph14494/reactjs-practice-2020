import React from 'react';

function Header(props) {
  console.log("Header");

	return (
		<div className="jumbotron m-b-1rem">
			<h1 className="display-3">Jumbo heading</h1>
			<p className="lead">Jumbo helper text</p>
		</div>
	);
}

export default Header;
