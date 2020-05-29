import React from 'react';
import 'src/css/App.scss';

function handleClick(e) {
	e.preventDefault();
  window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
}

export default function TopButton() {
	return (
		<div className="round-button">
			<div className="round-button-circle">
				<a href="!#" className="round-button" onClick={handleClick}>
					Top
				</a>
			</div>
		</div>
	);
}
